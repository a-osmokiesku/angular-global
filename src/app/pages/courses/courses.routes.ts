import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { LoggedInGuard } from "../../core/services/index";


// Route Configuration
const coursesRoutes: Routes = [
	{ path: 'courses', component: CoursesComponent, canActivate: [LoggedInGuard], data: {breadcrumb: "Courses"} },
	{ path: 'courses/:id', component: CourseComponent, canActivate: [LoggedInGuard], data:{breadcrumb:"Edit"} },
];

export const routes = RouterModule.forChild(coursesRoutes);
