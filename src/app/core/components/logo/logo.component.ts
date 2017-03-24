import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'logo',
	templateUrl: 'logo.component.html',
	providers: [],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class LogoComponent {
	constructor() {

	}
}
