import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes = [
    {
      id: 1,
      name: "spiderman",
    },
    {
      id: 2,
      name: "Ironman",
    },
    {
      id: 3,
      name: "Hulk",
    },
    {
      id: 4,
      name: "Thor",
    }
  ]


}
