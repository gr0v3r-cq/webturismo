import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* pages */
import { PageAdminComponent } from './page-admin.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';



const routes: Routes = [
	{ path: 'admin', component: PageAdminComponent,
      children: [
        { path: 'tablero1', component: PageDashboardComponent, outlet: 'firstchild' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdminRoutingModule { }
