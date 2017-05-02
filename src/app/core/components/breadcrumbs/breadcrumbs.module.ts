import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [BreadcrumbsComponent],
	imports: [CommonModule, RouterModule],
	exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {
	constructor() {
	}
}
