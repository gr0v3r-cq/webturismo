import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* page */
import { PageAdminRoutingModule } from './page-admin-routing.module';
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
