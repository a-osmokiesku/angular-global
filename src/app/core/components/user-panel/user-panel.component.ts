import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'user-panel',
	templateUrl: 'user-panel.component.html',
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class UserPanelComponent {
	constructor() {
	}
	

	private userLogin: string = 'Artur Osmokiesku';
}
