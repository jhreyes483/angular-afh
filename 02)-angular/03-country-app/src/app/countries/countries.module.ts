import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalPageComponent } from './page/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './page/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './page/by-region-page/by-region-page.component';
import { CountriesRoutingModule } from './countries.-routing.module';
import { CountryPageComponent } from './page/country-page/country-page.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
   // ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule, /** ojo siempre colocar acá los router hijos o independiente de cada modulo */
    SharedModule,
  ]
})
export class CountriesModule { }
