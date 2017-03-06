import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseService } from '../../core/services';
import { CourseItem } from '../../core/entities';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./courses.template.html')
})

export class CoursesComponent implements OnInit, OnDestroy{
    private courseServiceSubscription: Subscription;
    private courseList: CourseItem[];
    private isLoading: boolean = false;    

    constructor(private courseService: CourseService){
        console.log('Courses page constructor');

        this.courseList = [];
    }

     ngOnDestroy(): void {
        this.courseServiceSubscription.unsubscribe();
    }

     ngOnInit(): void {
        console.log('Courses page init');

        this.isLoading = true;
        this.courseServiceSubscription = this.courseService.getCourseItems().subscribe((res: CourseItem[])=>{
            this.courseList = res;
            this.isLoading = false;
        })
    }
}