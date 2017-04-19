//angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

//routes
import { routes } from './courses.routes';

//custom components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

import { BorderHighlightDirective } from '../../core/directives/borderHighlight.directive';
import { DurationModule } from '../../core/pipes/duration.pipe';
import { OrderByPipe } from '../../core/pipes/orederBy.pipe';
import { FilterPipe } from '../../core/pipes/filter.pipe';
import { AuthorizedHttp } from "../../core/services/authService/authorizedHttp.service";




@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent,
        ToolboxComponent,
        BorderHighlightDirective,
        OrderByPipe,
        FilterPipe
    ],
    imports: [
        routes,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        DurationModule
    ],
    providers: [{
        provide: AuthorizedHttp,
        useFactory: (backend: XHRBackend, options: RequestOptions) => {
            return new AuthorizedHttp(backend, options);
        },
        deps: [XHRBackend, RequestOptions]
    }]
})

export class CoursesModule{
    constructor(){}
}