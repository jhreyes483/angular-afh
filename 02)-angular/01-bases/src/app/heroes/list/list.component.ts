import { Component } from '@angular/core';

class Hero{
  constructor(
    public id: number,
    public name : string
  ){

  }
}

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
  public  deleteHero : any;


  constructor(){
    this.deleteHero = new Hero (0,'');
  }



  removeLastHero() :void{
    this.deleteHero = this.heroes.pop();
  }


}
