import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {
  public heroes : Hero[] = [];

  constructor( private _heroesService : HeroesService){

  }
  ngOnInit(): void {
    this.getHeroes()
    console.log( 'heroes--->>>',this.heroes)
  }

  getHeroes(){
    this._heroesService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
}
