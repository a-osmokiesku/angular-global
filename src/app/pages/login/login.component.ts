import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModel } from '../core/entities';

@Component({
	selector: 'login-form',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})

export class LoginComponent{

    constructor(){
        console.log('Login page constructor');
    }
}