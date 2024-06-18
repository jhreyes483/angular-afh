import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.intarface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character : any;
  constructor(){
    this.character = new Character(0, '',0);
  }

  emitCharacter(form : any) : void{
    console.log(this.character)
  }

}
