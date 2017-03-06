import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


// Route Configuration
const coursesRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
];

export const routes = RouterModule.forChild(coursesRoutes);
