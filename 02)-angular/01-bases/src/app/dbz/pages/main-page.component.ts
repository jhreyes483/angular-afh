import { Component } from '@angular/core';
import { Character } from '../interfaces/character.intarface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {


  public characters: Character[] = [
    {
      id: 1,
      name: 'Kriling',
      power: 1000
    },
    {
      id: 2,
      name: 'Goku',
      power: 9500

    },
    {
      id: 3,
      name: 'Begeta',
      power: 8000
    }
  ];

  onNewCharacter(character : Character){
    console.log('component father', character);
   }
}
