import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.intarface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() /** entrada de objeto de componente (este es componente hijo) */
  public charactersList: Character[] = [
    /** valor por default*/
    {
      id: 1,
      name: 'Tronks',
      power: 10
    },

  ];



}
