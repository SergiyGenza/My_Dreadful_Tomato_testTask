import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RemoveSymbols',
})
export class RemoveSymbolsPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\//g, '');
  }

}
