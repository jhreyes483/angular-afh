import { Component } from '@angular/core';
import { AuthService } from '../../services/ath.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {


  constructor(
    private _authService :AuthService,
    private _router :Router
  ){}

  onLogin(){
    this._authService.login('javier.reyes@dev.com', 'nn')
    .subscribe( user => {
        this._router.navigate(['/'])
    });
  }
}
