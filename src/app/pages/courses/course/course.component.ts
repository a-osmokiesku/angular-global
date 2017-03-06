import { Component, ViewEncapsulation, Input  } from '@angular/core';

import { CourseService } from '../../../core/services';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./course.styles.scss')],
	template: require('./course.template.html')
})

export class CourseComponent{
	@Input() public course: CourseItem;

    constructor(){}
}