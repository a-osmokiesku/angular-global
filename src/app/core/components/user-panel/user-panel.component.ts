import { Component, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';

import { AuthService } from '../../services';
import { Subscription } from "rxjs/Subscription";
import { UserInfo } from "../../entities/index";

@Component({
	selector: 'user-panel',
	templateUrl: 'user-panel.component.html',
	providers: [],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPanelComponent {
	private isAuthSubscription: Subscription;
	private userInfoSubscription: Subscription;

	constructor(private authService: AuthService, private detector: ChangeDetectorRef) {
	}
	
	logout(){
		this.authService.logout();
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
			this.detector.markForCheck();
		});

		this.isAuthSubscription = this.authService.UserInformation.subscribe((info: UserInfo)=>{
			if(info){
				this.userLogin = info.userName;
				this.detector.markForCheck();				
			}
		});
	}
}
