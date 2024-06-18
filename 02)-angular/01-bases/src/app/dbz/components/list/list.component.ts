import { Component, Input,  Output, EventEmitter  } from '@angular/core';
import { Character } from '../../interfaces/character.intarface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() /** entrada de objeto de componente (este es componente hijo) */
  public charactersList : Character[] = [
    /** valor por default*/
    {
      id: 1,
      name: 'Tronks',
      power: 10
    },
  ];

  @Output()
  public deleteCharecterById: EventEmitter<string> = new EventEmitter()

  /** este es el evento que se debe pegar en esta clase para emitir a componente hijo */
  onDelete(indexDelete : string): void {
   this.deleteCharecterById.emit(indexDelete)
  }

  deleteCharacter(index : string){
    this.onDelete(index);
    //console.log(index);
  }


}
