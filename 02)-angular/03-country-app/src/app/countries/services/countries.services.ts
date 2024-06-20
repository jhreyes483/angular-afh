import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay,catchError, of, map, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountryService {

  public cacheStore : CacheStore = {
    byCapital: { term : '', countries: []},
    byCountries: { term : '', countries: []},
    byRegion:{ region : '', countries: []}
  };
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private _http: HttpClient) { }

  private getContriesRequest( url : string): Observable<Country[]> {
    return this._http.get<Country[]>(url)
    .pipe(
      delay(2000),
      catchError(error => {
        console.log(error)
        return of([])
      }),
    )
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this._http.get<Country[]>(this.apiUrl + '/alpha/' + code)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => {
          console.log(error)
          return of(null)
        })
      )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = this.apiUrl + '/capital/' + term;
    return this.getContriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = {term, countries})
    )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = this.apiUrl + '/name/' + term;
    return this.getContriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = {term, countries})
    )
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = this.apiUrl + '/region/' + region;
   // const regionCache = region c ? region :  '';
    return this.getContriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = {region , countries})
    )
  }
}
