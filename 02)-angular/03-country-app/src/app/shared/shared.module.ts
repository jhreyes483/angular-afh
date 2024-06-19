import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; /** ojo importar este router para que fincione el routerLink */

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './components/contact/contact.component';





@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    RouterModule /** ojo importar este router para que fincione el routerLink */
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent, /** siempre se debe exportar un modulo por lo menos el principal */
    SidebarComponent,
    ContactComponent
  ]
})
export class SharedModule { }
