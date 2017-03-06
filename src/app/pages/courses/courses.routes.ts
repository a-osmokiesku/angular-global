import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';


// Route Configuration
const coursesRoutes: Routes = [
	{ path: 'courses', component: CoursesComponent },
	{ path: 'courses/:id', component: CourseComponent },
];

export const routes = RouterModule.forChild(coursesRoutes);
