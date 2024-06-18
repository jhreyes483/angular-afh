import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.intarface";
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService  {

  constructor() {

  }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Kriling',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500

    },
    {
      id: uuid(),
      name: 'Begeta',
      power: 8000
    }
  ];

  addCharacter(character : Character){
    const newCharacter: Character = { ...character, id: uuid()}
    console.log('component father', character);
    this.characters.push( newCharacter )
   }

   deleteCharecterById(id: string){
    this.characters = this.characters.filter( character => character.id !== id);
   }

   /*
   onDeleteEmit(indexDelete : number){
    this.characters.splice(indexDelete, 1)
    console.log('component father--->>>', indexDelete);
   }
    */

  async register(user: any): Promise<any> {
   //return await this.axios.post(this.base_url + 'api/user', user);
  }
}
