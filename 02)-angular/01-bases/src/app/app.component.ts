import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'aapp ini';
  public counterIni = 10;
  public counter = this.counterIni;


  increaseBy(number: number) : void{
   this.counter += number;
  }

  resetBy(){
    this.counter = this.counterIni
  }
}
