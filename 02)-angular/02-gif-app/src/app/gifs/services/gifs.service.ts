import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  constructor() {

  }

  /** Se hace de esta forma para que solo sa modificable desde el servicio */
  private _tagsHistory: string[] = [];
  get tagsHistory() {
    return [...this._tagsHistory]
  }


  public searchTag(tag: string): void {
    if(tag.length === 0) return;

    this.organizeHistory(tag)
    console.log(this._tagsHistory)
  }

  private organizeHistory(tag : string) : void{
    tag = tag.toLowerCase(); // deja todo en minúscula

    if(this._tagsHistory.includes(tag)){
      /** si ya existe esto en el array lo borra */
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag != tag)
    }
    this._tagsHistory.unshift(tag) // inserta el tag de primeras
    this._tagsHistory =  this.tagsHistory.splice(0,10); // deja los primeros 10 tags
  }





}
