import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate'
})
export class TextTruncatePipe implements PipeTransform {
  transform(value: string, limit = 100): string {
    if (value.length > limit) {
      return value.substring(0, limit);
    }
    return value;
  }
}
