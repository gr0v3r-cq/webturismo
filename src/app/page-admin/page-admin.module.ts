import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* module */
import { PageAdminRoutingModule } from './page-admin-routing.module';

/* page */
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';



@NgModule({
	imports: [
		CommonModule,
		PageAdminRoutingModule
	],
	declarations: [
		PageDashboardComponent
	]
})
export class PageAdminModule { }
