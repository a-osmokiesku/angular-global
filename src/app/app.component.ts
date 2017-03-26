/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	ViewEncapsulation,
	NgZone,
	OnDestroy
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
export class AppComponent implements OnInit, OnDestroy {
	public loaderStatus: boolean;

	constructor(private loaderService: LoaderService, private zone: NgZone) {
		this.loaderStatus = false;
	}

	ngOnInit() {
		this.loaderService.uiState.subscribe((val: UiState)=>{
			this.loaderStatus = val.actionOnGoing;
		});

		let startTimeInMs: number = 0;
		this.zone.onUnstable.subscribe(value => {
			startTimeInMs = Date.now();
		});

		this.zone.onStable.subscribe(value => {
			if(startTimeInMs !== 0){
				let perfomanceResult: number = Date.now() - startTimeInMs;
				console.log("Change detection: ", perfomanceResult, "ms.");
			}
		});
	}

	ngOnDestroy(){
		this.zone.onUnstable.unsubscribe();
		this.zone.onStable.unsubscribe();
	}

}
