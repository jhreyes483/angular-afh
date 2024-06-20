import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent  {
  public countries: Country[] = [];
  public isLoading : boolean = false;

  constructor(
    private _countryService: CountryService
  ) { }

  searchByCapital(value: string): void {
    this.isLoading = true;
    this._countryService.searchCapital(value)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;

      })

    console.log('serchCapital -->', value);
  }


}
