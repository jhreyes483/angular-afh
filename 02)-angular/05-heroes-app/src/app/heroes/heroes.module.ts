import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TextTruncatePipe } from './pipes/hero-text-truncate';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    /* Pipes */
    TextTruncatePipe,
    HeroImagePipe,
    ConfirmDialogComponent

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule, /** OJO importante para que lea los estilos de material este modulo */
    ReactiveFormsModule, /** Inportante para formularios */
    FormsModule

  ]
})
export class HeroesModule { }
