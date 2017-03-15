import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModel } from '../core/entities';
import { AuthService } from "../../core/services";

@Component({
	selector: 'login-form',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})

export class LoginComponent{

    constructor(private authService: AuthService){
    }

	private email: string;
	private password: string

	private login(){
		console.log(this.email);
		console.log(this.password);		
		this.authService.login(this.email, this.password);
	}
}