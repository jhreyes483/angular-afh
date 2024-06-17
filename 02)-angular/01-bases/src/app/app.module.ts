import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

/* modulos */
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';
/* componentes */
import { AppComponent } from './app.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';





@NgModule({
  declarations: [
    AppComponent,

    /** Importacion de componentes */
  //    HeroComponent,
  //    ListComponent,
  ],
  imports: [
    /* modules */
    CounterModule,
    HeroModule,
    /****** */

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
