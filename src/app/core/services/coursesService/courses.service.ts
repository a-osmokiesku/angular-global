import { Http, RequestMethod, RequestOptions, Request, Response, URLSearchParams } from '@angular/http';
import { BehaviorSubject, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	private _courses: BehaviorSubject<Array<CourseItem>> = new BehaviorSubject([]);
	private baseUrl: string;

	constructor(private http: Http) {
		this.baseUrl = 'http://localhost:4000';
	}
	
	get	courses(){
		let borderDate = new Date;
        borderDate.setDate(borderDate.getDate() - 14);

		let requestOptions: RequestOptions = new RequestOptions();
		let request: Request;
		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Get;
		request = new Request(requestOptions);

		return this.http.request(request)
			.map((res: Response) => {
				return res.json()
			})
			.map((courses) => courses.map((item) => new CourseItem(
				item.name, item.length, item.date, item.description, item.isTopRated
			)));
	}
	
	public search(query: string): Observable<CourseItem[]>{
		let requestOptions = new RequestOptions();
		let request: Request;
		let urlParams: URLSearchParams = new URLSearchParams();

		urlParams.set('name_like', query);
		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Get;
		requestOptions.search = urlParams;
		request = new Request(requestOptions);

		return this.http.request(request)
			.map((res: Response) => res.json())
			.map((users) => users.map((item) => new CourseItem(
				item.name, item.length, item.date, item.description, item.isTopRated
			)));
	}

	public getItemById(id: number): Observable<CourseItem> {
		var course = this._courses.getValue().find((value: CourseItem)=>{
			return value.id == id;
		});

		return Observable.of(course);
	}

	public createCourse(title: string, description: string, duration: number): Observable<CourseItem> {
		let course: CourseItem = new CourseItem(title, duration, new Date(), description);
		let updatedCourses: Array<CourseItem> = this._courses.getValue();
		updatedCourses.push(course);
		this._courses.next(updatedCourses);

		let obs = Observable.create((observer: Observer<CourseItem>) => {
			observer.next(course);
		})

		return obs;
	}

	public removeCourse(id: number): Observable<Array<CourseItem>> {
		let obs = this.getItemById(id).subscribe((res: CourseItem)=>{
			let courses = this._courses.getValue();
			let index: number = courses.indexOf(res, 0);

			if(index > -1){
				courses.splice(index, 1);
			}
			this._courses.next(courses);
		});
		
		return new Observable(fn => this._courses.subscribe(fn));
	}
}
