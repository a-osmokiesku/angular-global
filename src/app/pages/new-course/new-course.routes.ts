import { Routes, RouterModule } from '@angular/router';
import { NewCourse } from './new-course.component';

// Route Configuration
const newCourseRouter: Routes = [
	{ path: 'new', component: NewCourse },
];

export const routes = RouterModule.forChild(newCourseRouter);