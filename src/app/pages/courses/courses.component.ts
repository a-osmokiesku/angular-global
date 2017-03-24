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

import { CourseService } from '../../core/services';
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

    constructor(private courseService: CourseService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
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
    }
}