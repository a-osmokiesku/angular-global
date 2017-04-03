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

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	template: require('./courses.template.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy, OnChanges{
    private _searchText: string | Date;

    @Input() 
    set searchText(value: string | Date){
        this._searchText = value;
        console.log(value);
    }
    get searchText(){
        return this._searchText;
    }

    public count: number = 0;

    constructor(private courseService: CourseService, private loaderService: LoaderService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
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
                    if(result){
                        this.loaderService.show();
                        this.courseService.removeCourse(courseId).delay(4000).subscribe((res)=>{
                            console.log(res);
                            this.loaderService.hide();
                        });
                    }
                }, rejectReason =>{
                    console.log(rejectReason);
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
    }

    ngOnInit(): void {
        this.courseService.courses.subscribe((courses: Array<CourseItem>)=>{
            this.count = courses.length;
        });
    }
}