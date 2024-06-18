import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.intarface";


@Injectable({providedIn: 'root'})
export class ServiceName  {

  constructor() {

  }

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
    this.characters.push(character)
   }

   onDeleteEmit(indexDelete : number){
    this.characters.splice(indexDelete, 1)
    console.log('component father--->>>', indexDelete);
   }

  async register(user: any): Promise<any> {
   //return await this.axios.post(this.base_url + 'api/user', user);
  }
}
