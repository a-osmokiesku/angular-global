/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { LoaderService } from "./core/services";
import { UiState } from "./core/entities";

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app',
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./styles/vendors.scss'),
		require('./styles/index.scss'),
		require('./app.styles.scss')
	],
	template: require('./app.template.html')
})
export class AppComponent implements OnInit {
	public loaderStatus: boolean;

	constructor(private loaderService: LoaderService) {
		this.loaderStatus = false;
	}

	public ngOnInit() {
		this.loaderService.uiState.subscribe((val: UiState)=>{
			this.loaderStatus = val.actionOnGoing;
		});
	}

}
