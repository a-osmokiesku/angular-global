import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { CourseService, LoaderService } from '../../core/services';
import { CourseItem } from '../../core/entities';
import { ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./courses.template.html')
})

export class CoursesComponent implements OnInit, OnDestroy, OnChanges{
    private _searchText: string;
    private courseServiceSubscription: Subscription;
    
    @Input() 
    set searchText(value: string){
        this._searchText = value;
        this.courseServiceSubscription = this.courseService.search(value).subscribe((courses)=>{
            this.count = courses.length;
            this.courses = courses;
        })
    }
    get searchText(){
        return this._searchText;
    }

    public count: number = 0;
    public courses: CourseItem[];
    public page: number = 1;
    public isLastPage: boolean = false;

    constructor(private courseService: CourseService, private loaderService: LoaderService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
        overlay.defaultViewContainer = vcRef;
    }

    loadPage(diff: number){
        this.page += diff;
        this.loaderService.show();
        this.courseServiceSubscription = this.courseService.search(this.searchText, this.page)
            .delay(1500)
            .subscribe((courses: Array<CourseItem>)=>{
                this.count = courses.length;
                this.courses = courses;
                this.loaderService.hide();
                this.isLastPage = this.count < 5 ? true : false;
            });
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
                    if(result){
                        this.loaderService.show();
                        this.courseService.removeCourse(courseId).delay(1500).subscribe((res)=>{
                            this.courses = res;
                            this.count = res.length;
                            this.loaderService.hide();
                        });
                    }
                }, rejectReason =>{
                    console.error(rejectReason);
                })
            });
    }

    ngOnChanges(): void
    {
        console.log('Courses page ngOnChanges');
    }
    
    ngDoCheck():void{
    }
    
    ngAfterContentInit():void{
    }
    
    ngAfterContentChecked():void{
    }
    
    ngAfterViewInit():void{
    }

    ngAfterViewChecked():void{
    }

    ngOnDestroy(): void {
        this.courseServiceSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.courseServiceSubscription = this.courseService.courses().subscribe((courses: Array<CourseItem>)=>{
            this.count = courses.length;
            this.courses = courses;
        });
    }
}