import { Component, ViewEncapsulation, OnInit, OnDestroy, OnChanges, Input} from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { CourseService } from '../../core/services';
import { CourseItem } from '../../core/entities';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./courses.template.html')
})

export class CoursesComponent implements OnInit, OnDestroy, OnChanges{
    private courseServiceSubscription: Subscription;
    private courseList: CourseItem[];
    private isLoading: boolean = false;
    
    private _searchText: string | Date;
    @Input() 
    set searchText(value: string | Date){
        this._searchText = value;
        console.log(value);
    }
    get searchText(){
        return this._searchText;
    }
    // private searchText: string | Date;
    // private innerSearchText: string | Date;

    constructor(private courseService: CourseService){
        // console.log('Courses page constructor');
        this.courseList = [];
    }

    handleCourseDeleted(course: CourseItem): void{
        console.log(course);
    }

    ngOnChanges(): void
    {
        console.log('Courses page ngOnChanges');
    }
    
    ngDoCheck():void{
        // if(this.innerSearchText !== this.searchText){
        //     console.log(this.searchText);
        //     this.innerSearchText = this.searchText;
        // }
        // console.log('Courses page ngDoCheck');
    }
    
    ngAfterContentInit():void{
        // console.log('Courses page ngAfterContentInit');
    }
    
    ngAfterContentChecked():void{
        // console.log('Courses page ngAfterContentChecked');
    }
    
    ngAfterViewInit():void{
        // console.log('Courses page ngAfterViewInit');
    }

    ngAfterViewChecked():void{
        // console.log('Courses page ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        // console.log('Courses page ngOnDestroy');
        this.courseServiceSubscription.unsubscribe();
    }

     ngOnInit(): void {
        // console.log('Courses page ngOnInit');

        this.isLoading = true;
        this.courseServiceSubscription = this.courseService.getCourseItems().subscribe((res: CourseItem[])=>{
            this.courseList = res;
            this.isLoading = false;
        })
    }
}