import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


// Route Configuration
const coursesRoutes: Routes = [
	{ path: 'login', component: LoginComponent, data: {breadcrumb: "Sign In"}},
];

export const routes = RouterModule.forChild(coursesRoutes);
