import { BehaviorSubject, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	private _courses: BehaviorSubject<Array<CourseItem>> = new BehaviorSubject([]);

	constructor() {
		let mockList = [
			new CourseItem('Video course 1', 88, new Date(2017,3,20),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
			new CourseItem('Video course 2', 15, new Date(2017,3,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', true),
			new CourseItem('Video course 3', 135, new Date(2016,1,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')	
		];
		Observable.of(mockList).subscribe(
			res => {
				this._courses.next(res);
			}
		)
	}
	
	get	courses(){
		return new Observable(fn => this._courses.subscribe(fn));
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

	public updateCourse(id: number, title: string, description: string, duration: number): Observable<CourseItem> {
		let obs = this.getItemById(id);
		obs.subscribe((res: CourseItem)=>{
			let updatedCourses: Array<CourseItem> = this._courses.getValue();
			
			var index = updatedCourses.indexOf(res, 0);
			updatedCourses[index].title = title;
			updatedCourses[index].description = description;
			updatedCourses[index].duration = duration;
			
			this._courses.next(updatedCourses);
		});
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
