import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    // componentes de este modulo
    HeroComponent,
    ListComponent
  ],
  exports: [
    // componentes de este modulo
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
})
export class HeroModule { }
