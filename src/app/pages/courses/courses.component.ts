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
    private searchText: string | Date;
    private isLoading: boolean = false;    

    constructor(private courseService: CourseService){
        console.log('Courses page constructor');

        this.courseList = [];
    }

    handleCourseDeleted(course: CourseItem): void{
        console.log(course);
    }

    ngOnChanges():void{
        console.log('Courses page ngOnChanges');
    }
    
    ngDoCheck():void{
        console.log('Courses page ngDoCheck');
    }
    
    ngAfterContentInit():void{
        console.log('Courses page ngAfterContentInit');
    }
    
    ngAfterContentChecked():void{
        console.log('Courses page ngAfterContentChecked');
    }
    
    ngAfterViewInit():void{
        console.log('Courses page ngAfterViewInit');
    }

    ngAfterViewChecked():void{
        console.log('Courses page ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('Courses page ngOnDestroy');
        this.courseServiceSubscription.unsubscribe();
    }

     ngOnInit(): void {
        console.log('Courses page ngOnInit');

        this.isLoading = true;
        this.courseServiceSubscription = this.courseService.getCourseItems().subscribe((res: CourseItem[])=>{
            this.courseList = res;
            this.isLoading = false;
        })
    }
}