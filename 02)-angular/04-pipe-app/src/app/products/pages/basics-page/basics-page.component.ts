import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'javier';
  public nameUpper: string = 'JAVIER';
  public fullName: string = 'jaVier ReYes';
  public customDate: Date = new Date();

  // Configuración del local de la app

}
