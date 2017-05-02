import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';

import { AuthService } from '../../services';
import { Subscription } from "rxjs/Subscription";
import { UserInfo } from "../../entities/index";

@Component({
	selector: 'user-panel',
	templateUrl: 'user-panel.component.html',
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class UserPanelComponent {
	private isAuthSubscription: Subscription;
	private userInfoSubscription: Subscription;

	constructor(private authService: AuthService) {
	}
	
	logout(){
		this.authService.logout();
		location.reload();
	}

	public userLogin: string;

	public isAuth: boolean = false;

	ngOnDestroy(): void {  
        this.isAuthSubscription.unsubscribe(); 
		this.userInfoSubscription.unsubscribe();
    } 

	ngOnInit(){
		this.isAuthSubscription = this.authService.isAuthenticated().subscribe((isAuth: boolean)=>{
			this.isAuth = isAuth;
		});

		this.isAuthSubscription = this.authService.UserInformation.subscribe((info: UserInfo)=>{
			if(info){
				this.userLogin = info.userName;			
			}
		});
	}
}
