import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({

  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  /*
  Opcion 1 de creacion de form
  public myForm : FormGroup = new FormGroup({
    name: new FormControl(
      '', // valor por defecto
      [], // validaciones sincronas
      [] // validaciones asicronas
    ),
    price: new FormControl(0),
    inStorage: new FormControl(0)
  })
  */

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    isStorage: [0, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    /** valores por default */
    this.myForm.reset({
      name: 'product default',
      price: 1000,
      isStorage: 2000
    })
  }

  isNotValifField( field : string) : boolean | null{
    return this.myForm.controls[field]
    && this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  getFieldError(field: string):string  {
    if(! this.myForm.controls[field]) return '';

    const errors = (this.myForm.controls[field] && this.myForm.controls[field].errors) || {};
    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Este campo es requerido.';

      case 'minlength':
        return `Minimo ${errors['minlength'].requiredLength } caracteres.`

      case 'min':
        return `Valor mínimo ${errors['min'].min }.`

      default :
        return '';
      }
    }
    return '';
  }

  onSave(): void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
    /* valores despues de realizar acciones */
    this.myForm.reset({
      price: 10,
      inStorage: 0
    })
  }


}
