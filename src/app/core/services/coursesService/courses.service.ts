import { Http, RequestMethod, RequestOptions, Request, Response, URLSearchParams } from '@angular/http';
import { BehaviorSubject, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';
import { AuthorizedHttp } from '../authService/authorizedHttp.service';

@Injectable()
export class CourseService {

	private _courses: BehaviorSubject<Array<CourseItem>> = new BehaviorSubject([]);
	private baseUrl: string;
	private pageSize: number;

	constructor(private http: AuthorizedHttp) {
		this.baseUrl = 'http://localhost:4000';
		this.pageSize = 5;
	}
	
	public courses(page?: number): Observable<CourseItem[]>{
		if(!page) page = 1;

		let borderDate = new Date;
        borderDate.setDate(borderDate.getDate() - 14);

		let requestOptions: RequestOptions = new RequestOptions();
		let request: Request;
		let urlParams: URLSearchParams = new URLSearchParams();

		urlParams.set('_page', page.toString());
		urlParams.set('_limit', this.pageSize.toString());
		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Get;
		requestOptions.search = urlParams;
		request = new Request(requestOptions);

		return this.http.request(request)
			.map((res: Response) => {
				return res.json()
			})
			.map((courses) => courses.map((item) => new CourseItem(
				item.id, item.name, item.length, item.date, item.description, item.isTopRated
			)));
	}
	
	public search(query: string, page?: number): Observable<CourseItem[]>{
		console.log(page);
		if(!page) page = 1;
		
		let request: Request;
		let requestOptions = new RequestOptions();
		let urlParams: URLSearchParams = new URLSearchParams();

		urlParams.set('name_like', query);
		urlParams.set('_page', page.toString());
		urlParams.set('_limit', this.pageSize.toString());
		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Get;
		requestOptions.search = urlParams;

		request = new Request(requestOptions);
		return this.http.request(request)
			.map((res: Response) => res.json())
			.map((users) => users.map((item) => new CourseItem(
				item.id, item.name, item.length, item.date, item.description, item.isTopRated
			)));
	}

	public createCourse(title: string, description: string, duration: number): Observable<CourseItem> {
		let course: CourseItem = new CourseItem(1, title, duration, new Date(), description);
		let updatedCourses: Array<CourseItem> = this._courses.getValue();
		updatedCourses.push(course);
		this._courses.next(updatedCourses);

		let obs = Observable.create((observer: Observer<CourseItem>) => {
			observer.next(course);
		})

		return obs;
	}

	public removeCourse(id: number): Observable<CourseItem[]> {
		let request: Request;
		let requestOptions = new RequestOptions();

		requestOptions.url = `${this.baseUrl}/courses/${id}`;
		requestOptions.method = RequestMethod.Delete;

		request = new Request(requestOptions);
		return this.http.request(request)
			.map((res)=>{
				console.log(res);
			})
			.flatMap(foo => {
				return this.courses();
			});
	}
}
