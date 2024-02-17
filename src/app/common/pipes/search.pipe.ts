import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.modet';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], serchValue: string, range: number[]): unknown {
    if (!serchValue && !range) {
      return value;
    }

    if (serchValue && range) {
      value = this.filterBySearchValue(serchValue, value);
      value = this.filterByRange(range, value);
      return value;
    } else if (serchValue) {
      return value = this.filterBySearchValue(serchValue, value);
    } else if (range) {
      return this.filterByRange(range, value);
    }
  }

  private filterBySearchValue(serchValue: string, v: Product[]): Product[] {
    return v.filter(el => el.title.toLocaleLowerCase().includes(serchValue.toLocaleLowerCase()));
  }

  private filterByRange(range: number[], v: Product[]) {
    console.log(range);
    return v.filter(el => {
      if (range[1]) {
        return el.releaseYear <= range[1] && range[0] <= el.releaseYear;
      }
      return el.releaseYear == range[0];
    })
  }

}
