import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './page/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './page/by-region-page/by-region-page.component';
import { CountryPageComponent } from './page/country-page/country-page.component';
import { ByCountryPageComponent } from './page/by-country-page/by-country-page.component';
import { CountriesRoutingModule } from './countries.-routing.module';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    ByCountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule /** ojo siempre colocar acá los router hijos o independiente de cada modulo */
  ]
})
export class CountriesModule { }
