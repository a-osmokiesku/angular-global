import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Observable, Subject } from 'rxjs';
import { BehaviorSubject, Observer } from 'rxjs/Rx';

import { UserInfo } from '../../entities';
import { Http, RequestMethod, RequestOptions, Request, Response, URLSearchParams } from '@angular/http'

@Injectable()
export class AuthService{
    private readonly LocalStorageKey: string = "auth";
    private baseUrl: string;

    private _userInfo: BehaviorSubject<UserInfo> = new BehaviorSubject(new UserInfo());
    private _isAuth: BehaviorSubject<boolean> = new BehaviorSubject(undefined);    

    get UserInformation(): Observable<UserInfo>{
        let userInfo: UserInfo = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        this._userInfo.next(userInfo);
        return new Observable(fn => this._userInfo.subscribe(fn));
    }

    constructor(private localStorage: LocalStorageService, private http: Http){
		this.baseUrl = 'http://localhost:4001';
    }

    public login(email: string, password: string): Observable<boolean>{
        let request: Request;
		let requestOptions = new RequestOptions();
		let urlParams: URLSearchParams = new URLSearchParams();

		urlParams.set('login_like', email);
		requestOptions.url = `${this.baseUrl}/users`;
		requestOptions.method = RequestMethod.Get;
		requestOptions.search = urlParams;

		request = new Request(requestOptions);
		return this.http.request(request)
			.map((res: Response) => res.json())
			.map((users) => users.map((item) => {
                console.log(item.password);
                if(item.password === password){
                    var userInfo: UserInfo = new UserInfo(email, `${item.name.first} ${item.name.last}`, item.fakeToken);
                    localStorage.setItem(this.LocalStorageKey, JSON.stringify(userInfo));
                    this._userInfo.next(userInfo);
                    return true
                }
                return false;
            }));
    }

    public logout(): void{
        let currentStatus: boolean = this._isAuth.getValue();
        if(this._isAuth.getValue()){
            this._userInfo.next(new UserInfo());
            this._isAuth.next(false);
            localStorage.removeItem(this.LocalStorageKey);
        }
    }

    public isAuthenticated(): Observable<boolean>{
        this._isAuth.next(localStorage.getItem(this.LocalStorageKey) != null);
        return new Observable(fn => this._isAuth.subscribe(fn));
    }
}