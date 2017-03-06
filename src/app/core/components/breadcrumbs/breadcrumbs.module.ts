import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [BreadcrumbsComponent],
	imports: [RouterModule],
	exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {
	constructor() {
	}
}
