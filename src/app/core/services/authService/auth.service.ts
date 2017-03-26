import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Observable, Subject } from 'rxjs';
import { BehaviorSubject, Observer } from 'rxjs/Rx';

import { UserInfo } from '../../entities';

@Injectable()
export class AuthService{
    private readonly LocalStorageKey: string = "auth";

    private _userInfo: BehaviorSubject<UserInfo> = new BehaviorSubject(new UserInfo());
    private _isAuth: BehaviorSubject<boolean> = new BehaviorSubject(undefined);    

    get UserInformation(): Observable<UserInfo>{
        let userInfo: UserInfo = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        this._userInfo.next(userInfo);
        return new Observable(fn => this._userInfo.subscribe(fn));
    }

    constructor(private localStorage: LocalStorageService){
    }

    public login(email: string, password: string): Observable<boolean>{
        var userInfo: UserInfo = new UserInfo(email, "Artur");
        localStorage.setItem(this.LocalStorageKey, JSON.stringify(userInfo));
        this._userInfo.next(userInfo);
        
        let obs = Observable.create((observer: Observer<boolean>) => {
			observer.next(true);
		})

		return obs;
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