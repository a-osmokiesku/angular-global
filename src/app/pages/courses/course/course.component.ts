import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { CourseService } from '../../../core/services';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./course.styles.scss')],
	template: require('./course.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseComponent{
	@Input() public course: CourseItem;
	@Output() courseDeleted = new EventEmitter();
	
    constructor(){}

	delete(){
		this.courseDeleted.emit(this.course.id);
	}
}