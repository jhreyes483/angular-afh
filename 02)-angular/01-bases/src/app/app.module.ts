import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

/* modulos */
import { CounterModule } from './counter/counter.module';

/* componentes */
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';




@NgModule({
  declarations: [
    AppComponent,

    /** Importacion de componentes */
      HeroComponent,
      ListComponent,
  ],
  imports: [
    /* modules */
    CounterModule,
    /****** */

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
