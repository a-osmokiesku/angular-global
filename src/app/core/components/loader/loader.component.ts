import { loadConfigurationFromPath } from 'tslint/lib/configuration';
import { LoaderService } from '../../services/loaderService/loader.service';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Component({
	selector: 'loader',
	templateUrl: 'loader.component.html',
    styles: [require('./loader.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None

})
export class LoaderComponent {
	constructor() {
	}
}
