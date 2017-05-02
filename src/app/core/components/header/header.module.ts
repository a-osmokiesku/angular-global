import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { LogoModule } from '../logo/logo.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { UserPanelModule } from '../user-panel/user-panel.module';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, RouterModule, LogoModule, BreadcrumbsModule, UserPanelModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}
