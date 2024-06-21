import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero? : Hero;
  constructor(
    private _heroesService : HeroesService,
    private _activeRoute : ActivatedRoute,
    private _router: Router,
  ){

  }
  ngOnInit(): void {
    this.getHero()
  }
  getHero(){
    this._activeRoute.params
    .pipe(
      switchMap(({id}) => this._heroesService.getHeroById(id) )
    )
    .subscribe( hero => {
        if( !hero ) return this._router.navigate(['/heroes.list'])
          this.hero = hero;
        console.log(hero)
        return;
    })
  }

}
