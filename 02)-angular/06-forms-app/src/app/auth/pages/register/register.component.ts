import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  * as customValidator  from '../../../shared/validators/validators';


@Component({
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(customValidator.firstNameAndLastNamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(customValidator.emailPattern) ]],
    username: ['', [Validators.required, customValidator.cantBeStrider]],
    password: ['',[Validators.required,  Validators.minLength(6)  ] ],
    password2:['', [Validators.required]]
  });


  constructor(
    private fb: FormBuilder
  ){}

  onSubmit(){
    this.myForm.markAllAsTouched();
    return;
  }

  isValidField(field : string ){
    //TODO obtenerlo de un servicio
  }

}
