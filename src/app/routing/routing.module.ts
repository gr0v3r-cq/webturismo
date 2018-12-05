import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* pages */
import { PageHomeComponent } from '../pageExternal/page-home/page-home.component';
import { PageAdminComponent } from '../page-admin/page-admin.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PageLoginComponent } from '../login/page-login/page-login.component';
import { PageUniqueplacesComponent } from '../pageExternal/page-uniqueplaces/page-uniqueplaces.component';
import { PageInfoActividadComponent } from '../pageExternal/page-info-actividad/page-info-actividad.component';

/* page children */
import { PageDashboardComponent } from '../page-admin/page-dashboard/page-dashboard.component';

/* AuthGuard */
import { AuthGuard } from '../login/_guards/index';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PageHomeComponent },
    { path: 'admin', component: PageAdminComponent,
      children: [
        { path: 'tablero', component: PageDashboardComponent, outlet: 'firstchild', canActivate: [AuthGuard] }
      ]
    },
    { path: 'UniquePlacea', component: PageUniqueplacesComponent },
    { path: 'detalleinformacion/:id/:section/:tipocom', component: PageInfoActividadComponent },
    { path: 'login', component: PageLoginComponent },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
