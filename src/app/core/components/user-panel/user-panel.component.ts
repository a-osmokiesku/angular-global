import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '../../services';

@Component({
	selector: 'user-panel',
	templateUrl: 'user-panel.component.html',
	providers: [],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserPanelComponent {
	constructor(private authService: AuthService) {
		this.isAuth = authService.isAuthenticated();
		if(this.isAuth){
			this.userLogin = authService.getUserInfo().userName;
		}
	}
	
	logout(){
		this.authService.logout();
	}

	private userLogin: string = 'Artur Osmokiesku';

	private isAuth: boolean;
}
