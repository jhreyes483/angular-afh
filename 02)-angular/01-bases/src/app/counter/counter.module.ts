import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
 declarations: [
 // componentes de este modulo
 CounterComponent
],
exports: [
 // componentes de este modulo
 CounterComponent
],
})
export class  CounterModule {}
