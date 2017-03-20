import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';
import { LoggedInGuard } from './core/services';

export const ROUTES: Routes = [
	{path: '', component: CoursesComponent, canActivate: [LoggedInGuard]},
	{path: 'courses', component: CoursesComponent, canActivate: [LoggedInGuard]},
	{path: '**', component: NoContentComponent},
];
