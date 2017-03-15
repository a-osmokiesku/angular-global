import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	private mockList: Array<CourseItem> = [
		new CourseItem('Video course 1', 88, new Date(2016,1,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
		new CourseItem('Video course 2', 15, new Date(2016,1,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
		new CourseItem('Video course 3', 135, new Date(2016,1,1),'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')	
	];

	constructor() {
	}

	public getList (): Observable<CourseItem[]> {
		return Observable.of(this.mockList);
	}

	public getItemById(id: number): CourseItem {
		return this.mockList.find((value: CourseItem)=>{
			return value.id == id;
		});
	}

	public createCourse(title: string, description: string, duration: number): void {
		var course: CourseItem = new CourseItem(title, duration, new Date(), description);
		this.mockList.push(course);
	}

	public updateCourse(id: number, title: string, description: string, duration: number): void {
		var index: number = this.mockList.indexOf(this.getItemById(id), 0);
		this.mockList[index].title = title;
		this.mockList[index].description = description;
		this.mockList[index].duration = duration;		
	}

	public removeCourse(id: number): void {
		var index: number = this.mockList.indexOf(this.getItemById(id), 0);
		if(index > -1){
			this.mockList.splice(index, 1);
		}
	}
}
