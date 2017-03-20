import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { UserPanelComponent } from './user-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [UserPanelComponent],
	imports: [RouterModule, CommonModule],
	exports: [UserPanelComponent]
})
export class UserPanelModule {
	constructor() {
	}
}
