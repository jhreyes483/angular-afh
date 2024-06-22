import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/ath.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

  get user() : User | undefined{
    return this._authService.currentUser;
  }

  onLogout() {
    this._authService.logout()
    this._router.navigate(['/auth/login'])
  }

}
