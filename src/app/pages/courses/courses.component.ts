import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

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

    constructor(private courseService: CourseService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
        // console.log('Courses page constructor');
        this.courseList = [];
        overlay.defaultViewContainer = vcRef;
    }

    handleCourseDeleted(courseId: number): void{
        this.modal.confirm()
            .size('sm')
            .keyboard(27)
            .title('Please confirm')
            .body('Are you sure?')
            .okBtn('Yes')
            .cancelBtn('No')
            .open().then(resultPromise => {
                resultPromise.result.then(result =>{
                    console.log(courseId);
                    this.courseService.removeCourse(courseId);
                })
            });
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
        this.courseServiceSubscription = this.courseService.getList().subscribe((res: CourseItem[])=>{
            this.courseList = res;
            this.isLoading = false;
        })
    }
}