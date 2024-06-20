import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.services';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public title : string ='Por región';
  public placeholder: string = 'busqueda por region';
  public regions: string[] = ['Africa', 'America','Asia', 'Europe', 'Oceania',]
  public selectedRegion?: string;

  constructor(
    private _countryService: CountryService
  ) { }

  searchByTerm(value: string): void {
    this.selectedRegion = value;
    this._countryService.searchRegion(value)
      .subscribe(countries => {
        this.countries = countries;
      })
    console.log('serchCapital -->', value);
  }
}
