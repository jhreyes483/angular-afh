import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.services';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {


  constructor(
    private _hertoesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {

  }
  /** formularios reactivos */
  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl('', { nonNullable: true }),
    publisher:        new FormControl<Publisher>(Publisher.DCComics /** default value */),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  });

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }


  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  ngOnInit(): void {
    this.loadDataByHero();
  }

  loadDataByHero(){
    if (!this._router.url.includes('edit')) return;

    this._activatedRoute.params /** estraigo el id por la url */
      .pipe(
        switchMap(({ id }) => this._hertoesService.getHeroById(id)), /** busco la data en el endpoint */
      ).subscribe(hero => {
        if (!hero) return this._router.navigateByUrl('/');

        this.heroForm.reset(hero); /** lleno el form con la data */
        return;
      });
  }

  onSubmit() {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this._hertoesService.updateHero(this.currentHero)
        .subscribe(hero => {
          //TODO mostar snacbar ok
        })
      return;
    }

    this.currentHero.id = this.currentHero.superhero;
    this._hertoesService.addHero(this.currentHero)
      .subscribe(hero => {
        // TODO mostrar snackbar indicando qeu se creo  y navegar a /hero/edit/ hero.id
      })

    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value

    })

  }





}
