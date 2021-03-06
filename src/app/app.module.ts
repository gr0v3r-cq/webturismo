import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* AgmCoreModule MAP*/
import { AgmCoreModule } from '@agm/core';

/* SweetAlert2 */
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

/* NgbModule */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* routing */
import { RoutingModule } from './routing/routing.module';
  
/* modules */
import { PageAdminModule } from './page-admin/page-admin.module';


/* pages */
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pageExternal/page-home/page-home.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadertopComponent } from './components/header/headertop/headertop.component';
import { NavvarComponent } from './components/header/navvar/navvar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PageLoginComponent } from './login/page-login/page-login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavadminComponent } from './components/header/navadmin/navadmin.component';
import { NavActivitisComponent } from './components/header/nav-activitis/nav-activitis.component';
import { PageUniqueplacesComponent } from './pageExternal/page-uniqueplaces/page-uniqueplaces.component';
import { PageInfoActividadComponent } from './pageExternal/page-info-actividad/page-info-actividad.component';
import { NavleftadminComponent } from './components/header/navleftadmin/navleftadmin.component';
import { PageComerciosComponent } from './pageExternal/page-comercios/page-comercios.component';

//servicios - estaticos 
import { CityService } from './services_statics/city-service';
import { AuthGuard } from './login/_guards/index';



@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageAdminComponent,
    FooterComponent,
    HeadertopComponent,
    NavvarComponent,
    SliderComponent,
    PageLoginComponent,
    NotFoundComponent,
    NavadminComponent,
    NavleftadminComponent,
    PageUniqueplacesComponent,
    NavActivitisComponent,
    PageInfoActividadComponent,
    PageComerciosComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    PageAdminModule,
    NgbModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArrFODy5ZCrr0vSzBMCs642oQWugzT2TU',
      libraries: ["places"]
    })
  ],
  providers: [
    CityService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
