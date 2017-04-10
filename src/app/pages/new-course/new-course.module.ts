//angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//routes
import { routes } from './new-course.routes';

//custom components
import { NewCourse } from './new-course.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { DurationSelectorComponent } from './duration-selector/duration-selector.component';
import { DurationModule } from './../../core/pipes/duration.pipe';

@NgModule({
    declarations: [
        NewCourse,
        DateSelectorComponent,
        DurationSelectorComponent
    ],
    imports: [
        routes,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        DurationModule
    ],
    providers: []
})

export class NewCourseModule{
    constructor(){}
}