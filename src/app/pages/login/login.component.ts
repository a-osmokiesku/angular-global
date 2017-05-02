import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { LoginModel } from '../core/entities';
import { AuthService, LoaderService } from "../../core/services";

@Component({
	selector: 'login-form',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})

export class LoginComponent{

	public loginForm: FormGroup = this.formBuilder.group({
    	email: ["", Validators.required],
    	password: ["", Validators.required]
  	});

    constructor(private router: Router, private authService: AuthService, private loaderService: LoaderService, private formBuilder: FormBuilder){
    }


	private login(){
		this.loaderService.show();
		this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).delay(4000).subscribe((loginResult: boolean)=>{
			this.loaderService.hide();
			this.router.navigate(['/']);
		});
	}
}