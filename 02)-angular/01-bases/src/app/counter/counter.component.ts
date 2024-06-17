import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter:  {{ counter }}</h3>
  <button  (click)="increaseBy(+1)">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  public title = 'aapp ini';
  public counterIni = 10;
  public counter = this.counterIni;

  constructor() { }
  increaseBy(number: number): void {
    this.counter += number;
  }

  resetBy() {
    this.counter = this.counterIni
  }

  ngOnInit() { }
}
