import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menuItems: MenuItem[] = []

  ngOnInit(): void {
    this.menuItems = [
      {label: 'New', icon: 'pi pi-fw pi-plus' },
      {label: 'Open', icon: 'pi pi-fw pi-download' }
    ]

  }
}
