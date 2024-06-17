import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /* se debe cargar este modulo para leer formularios*/

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from '../dbz/components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class DbzModule { }
