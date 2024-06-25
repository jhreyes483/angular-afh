import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  * as customValidator  from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';


@Component({
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this._validatorService.firstNameAndLastNamePattern)]  ],
    email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern) ], [ this._emailValidatorService ]],
    username: ['', [Validators.required, this._validatorService.cantBeStrider]],
    password: ['',[Validators.required,  Validators.minLength(6)  ] ],
    password2:['', [Validators.required]]
  },{
    /** validaciones no async aplicadas a todo el form */
    validator : [
      this._validatorService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });


  constructor(
    private fb: FormBuilder,
    private _validatorService : ValidatorService,
    private _emailValidatorService : EmailValidatorService
  ){}

  onSubmit(){
    this.myForm.markAllAsTouched();
    return;
  }

  isValidField(field : string ){
    return this._validatorService.isValidField( this.myForm, field )
  }

  getFieldError(field : string){
    return this._validatorService.getFieldError(this.myForm, field)
  }

}
