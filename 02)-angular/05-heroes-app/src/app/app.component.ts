import { Component } from '@angular/core';
import { AuthService } from './auth/services/ath.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heroesApp';

  constructor( private _authService: AuthService ){
    this._authService.checkAutenticatication
  }
}
