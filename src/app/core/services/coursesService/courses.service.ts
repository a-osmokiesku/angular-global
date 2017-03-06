import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	private hostUrl: string = 'http://private-4b671-exampleservice.apiary-mock.com/api/todos';

	private mockList: Array<CourseItem> = [
		new CourseItem('Video course 1', 88, new Date(2016,1,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
		new CourseItem('Video course 2', 15, new Date(2016,1,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
		new CourseItem('Video course 3', 135, new Date(2016,1,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')	
	];

	constructor(private http: Http) {
	}

	public getCourseItems (): Observable<CourseItem[]> {
		return this.http.get(this.hostUrl)
			.map((response: Response) => response.json())
			.map((todoItems: CourseItem[]) => {
				// change return value structure here if you want
				return this.mockList;
			});
	}
}
