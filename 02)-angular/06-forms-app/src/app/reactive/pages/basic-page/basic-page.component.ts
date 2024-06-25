import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ValidatorService } from '../../../shared/service/validators.service';

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

  constructor(
    private fb: FormBuilder,
    private _validatorService : ValidatorService
  ) { }
  ngOnInit(): void {
    /** valores por default */
    this.myForm.reset({
      name: 'product default',
      price: 1000,
      isStorage: 2000
    })
  }

  isNotValifField( field : string) : boolean | null{
    return this._validatorService.isValidField(this.myForm, field)
  }

  getFieldError(field: string):string | null {
    return this._validatorService.getFieldError(this.myForm, field)
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
