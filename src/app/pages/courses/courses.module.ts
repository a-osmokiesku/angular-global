//angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//routes
import { routes } from './courses.routes';

//custom components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

import { BorderHighlightDirective } from '../../core/directives/borderHighlight.directive';
import { ExponentialStrengthPipe } from '../../core/pipes/duration.pipe';
import { OrderByPipe } from '../../core/pipes/orederBy.pipe';
import { FilterPipe } from '../../core/pipes/filter.pipe';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent,
        ToolboxComponent,
        BorderHighlightDirective,
        ExponentialStrengthPipe,
        OrderByPipe,
        FilterPipe
    ],
    imports: [
        routes,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: []
})

export class CoursesModule{
    constructor(){}
}