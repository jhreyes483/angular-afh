import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, /* ...args : any[] */  toUpper: boolean = false): string {
    let result = '';



    return  (toUpper) ? value.toUpperCase() : value.toLowerCase()
  }
}
