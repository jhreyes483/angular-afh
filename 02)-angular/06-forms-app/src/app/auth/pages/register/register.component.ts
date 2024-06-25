import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  * as customValidator  from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/service/validators.service';


@Component({
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this._validatorService.firstNameAndLastNamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern) ]],
    username: ['', [Validators.required, this._validatorService.cantBeStrider]],
    password: ['',[Validators.required,  Validators.minLength(6)  ] ],
    password2:['', [Validators.required]]
  });


  constructor(
    private fb: FormBuilder,
    private _validatorService : ValidatorService
  ){}

  onSubmit(){
    this.myForm.markAllAsTouched();
    return;
  }

  isValidField(field : string ){
    return this._validatorService.isValidField( this.myForm, field )
  }

  getFieldError(field : string){
    console.log('--d--')
    return this._validatorService.getFieldError(this.myForm, field)
  }

}
