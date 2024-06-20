import { Component } from '@angular/core';
import { CountryService } from '../../components/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(
    private _countryService: CountryService
  ) { }

  searchByCapital(value: string): void {
    this._countryService.searchCapital(value)
      .subscribe(countries => {
        this.countries = countries;

      })

    console.log('serchCapital -->', value);
  }

}
