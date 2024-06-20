import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../services/countries.services';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  private id : string = '';
  constructor(
    private _route: ActivatedRoute,
    private _countryService: CountryService,
  ){

  }

  ngOnInit(): void {
    this._route.params.subscribe(({id}) =>{
      this.id = id
    });

    this._countryService.searchCountryByAlphaCode( this.id )
    .subscribe( country =>{
      console.log(country)
    });

  }
}
