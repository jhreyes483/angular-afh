import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {SharedModule} from './shared/shared.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByCapitalPageComponent } from './countries/page/by-capital-page/by-capital-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ByCapitalPageComponent,

  ],
  imports: [
    /** modulos */
    SharedModule,

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
