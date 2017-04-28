import { Http, RequestMethod, RequestOptions, Request, Response, URLSearchParams } from '@angular/http';
import { BehaviorSubject, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { AuthorizedHttp } from '../authService/authorizedHttp.service';

@Injectable()
export class AuthorService {

	private _authors: BehaviorSubject<string[]> = new BehaviorSubject([]);
	private baseUrl: string;

	constructor(private http: AuthorizedHttp) {
		this.baseUrl = 'http://localhost:4002';
	}
	
	public authors(): Observable<string[]>{

		let requestOptions: RequestOptions = new RequestOptions();
		let request: Request;

		requestOptions.url = `${this.baseUrl}/authors`;
		requestOptions.method = RequestMethod.Get;
		request = new Request(requestOptions);

		return this.http.request(request)
			.map((res: Response) => {
				return res.json();
			});
	}

}
