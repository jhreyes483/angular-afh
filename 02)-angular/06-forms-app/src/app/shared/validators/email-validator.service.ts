import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    console.log('entro a validación async')
    const email = control.value;
    console.log('emailValidator---',email)

    const httpCallObservable = new Observable<ValidationErrors|null>((subscriber) => {
      if(email === 'javier.reyes@gmail.com'){
        subscriber.next({
          emailTaken : true
        });
        subscriber.complete();
      }
      subscriber.next(null)
      subscriber.complete();
    }).pipe(
      delay(2000)
    )

    return httpCallObservable;


  /** acá se hace a petición http   */
  /*
    return this.http.get<any[]>('http://localhsto.....?email')
    .pipe(
      map(resp => {

        return (resp.length === 0 )
        ? null
        : { emailToken : true }
      })
    )
  */


    return of({
      emailTaken: true
    }).pipe(
      delay(2000)
    )
  }




}
