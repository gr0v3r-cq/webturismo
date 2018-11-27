import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PageLoginComponent } from './page-login/page-login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    PageAdminModule,
    NgbModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
