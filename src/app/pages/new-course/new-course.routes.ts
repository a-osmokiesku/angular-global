import { Routes, RouterModule } from '@angular/router';
import { NewCourse } from './new-course.component';
import { LoggedInGuard } from "../../core/services/index";

// Route Configuration
const newCourseRouter: Routes = [
	{ path: 'new', component: NewCourse, canActivate: [LoggedInGuard], data: {breadcrumb:"New course"} },
];

export const routes = RouterModule.forChild(newCourseRouter);