import { Routes, RouterModule } from '@angular/router';
import { NewCourse } from './new-course.component';
import { LoggedInGuard } from "../../core/services/index";

// Route Configuration
const newCourseRouter: Routes = [
	{ path: 'courses/new', component: NewCourse, canActivate: [LoggedInGuard], data: {breadcrumb:"New course"} },
	{ path: 'courses/:id', component: NewCourse, canActivate: [LoggedInGuard], data:{breadcrumb:"Edit"} },
];

export const routes = RouterModule.forChild(newCourseRouter);