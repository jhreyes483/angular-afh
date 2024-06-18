import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.intarface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  /** estancia para emitir evento */
  // import { Output } from '@angular/core';
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()
  public character : any

  constructor(){
    this.character = new Character(0,'',0);
   }

  emitCharacter(form: any): void {
   this.onNewCharacter.emit(this.character )
  }
  /**
  en el otro componente pegar este metodo
  onNewCharacter(character : Character){
   console.log('component father', character);
  }
  */
  /**
  /** html componente padre
  <dbz-add-character
  //importante colocar sibno pesos en emit
      (onNewCharacter)="onNewCharacter($event)"
  ></dbz-add-character>
  */




}
