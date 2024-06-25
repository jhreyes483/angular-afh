import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class ValidatorService {

  public firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

 cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase()
    console.log('--', value, control.value)
    if (value === 'strider') {
      console.log('es strider')
      return {
        noStrider: true
      }
    }
    return null
  }

  isValidField(form : FormGroup, field: string){
    const r = form.controls[field] && form.controls[field].errors && form.controls[field].touched;
    if(r) console.log('r-- ', r, field)
    return r
  }

  isValidFieldInArray( formArray: FormArray, index: number ) {
    return formArray.controls[index]
        && formArray.controls[index].errors
        && formArray.controls[index].touched;
  }


  getFieldError(form : FormGroup, field: string ): string | null {

    if ( !form.controls[field] ) return null;

    const errors = form.controls[field].errors || {};
    console.log(errors )

    for (const key of Object.keys(errors) ) {
      console.log('key--',key)
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } characters.`;

        case 'pattern':
          return 'Valor no valido'
          //return `Mínimo ${ errors['minlength'].requiredLength } characters.`;
        case 'noStrider':
          return 'El valor no puede ser strider';

        case 'min':
          return `Valor mínimo ${errors['min'].min }.`
      }
    }
    return '';
  }


  constructor() { }


}
