import { NgModule } from '@angular/core';
import { UserPanelComponent } from './user-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [UserPanelComponent],
	imports: [RouterModule],
	exports: [UserPanelComponent]
})
export class UserPanelModule {
	constructor() {
	}
}
