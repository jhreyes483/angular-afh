import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent /** simpre se debe exportar un modulo por lo menos el principal */
  ]
})
export class SharedModule { }
