import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAdminRoutingModule } from './page-admin-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PageAdminRoutingModule
  ],
  declarations: [PageDashboardComponent]
})
export class PageAdminModule { }
