//angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';

//routes
import { routes } from './new-course.routes';

//custom components
import { NewCourse } from './new-course.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { AuthorSelectorComponent } from './author-selector/author-selector.component';
import { DurationSelectorComponent } from './duration-selector/duration-selector.component';
import { DurationModule } from './../../core/pipes/duration.pipe';
import { AuthorizedHttp } from "../../core/services/authService/authorizedHttp.service";

@NgModule({
    declarations: [
        NewCourse,
        DateSelectorComponent,
        DurationSelectorComponent,
        AuthorSelectorComponent
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

export class NewCourseModule{
    constructor(){}
}