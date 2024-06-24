import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    /* Importante para el router del nav */
    RouterModule
  ],
  exports:[
    SideMenuComponent
  ]
})
export class SharedModule { }
