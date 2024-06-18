import { Component } from '@angular/core';

export class Dbz {
  constructor(
    public id: any,
    public name : string,
    public poder : number
    ) {}
}


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public dbz : any;
  constructor(){
    this.dbz = new Dbz(0, '',0);
  }

}
