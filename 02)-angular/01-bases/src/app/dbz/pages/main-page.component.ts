import { Component } from '@angular/core';
import { Character } from '../interfaces/character.intarface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(
    public _dbzService : DbzService
  ){}

  get characters(): Character[]{
    return [...this._dbzService.characters]
  }

  onDeleteCharacter(id: string){
    this._dbzService.deleteCharecterById(id)
  }

  onNewCharacter(character: Character){
    this._dbzService.addCharacter(character);
  }


}
