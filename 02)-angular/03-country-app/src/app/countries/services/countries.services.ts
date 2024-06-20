import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private _http: HttpClient) { }


  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this._http.get<Country[]>(this.apiUrl + '/alpha/' + code)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError(error => {
          console.log(error)
          return of(null)
        })
      )
  }

  searchCapital(term: string): Observable<Country[]> {
    return this._http.get<Country[]>(this.apiUrl + '/capital/' + term)
      .pipe(
        catchError(error => {
          console.log(error)
          return of([])
        })
      )
  }

  searchCountry(term: string): Observable<Country[]> {
    return this._http.get<Country[]>(this.apiUrl + '/name/' + term)
      .pipe(
        catchError(error => {
          console.log(error)
          return of([])
        })
      )
  }

  searchRegion(region: string): Observable<Country[]> {
    return this._http.get<Country[]>(this.apiUrl + '/region/' + region)
      .pipe(
        catchError(error => {
          console.log(error)
          return of([])
        })
      )
  }


}
