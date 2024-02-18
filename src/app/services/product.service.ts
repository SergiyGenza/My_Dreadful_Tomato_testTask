import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../common/models/product.model';

const url = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(route: string, range: number[], searchValue: string): Observable<Product[]> {
    return this.http.get<any>(url).pipe(
      map(products => {
        let filteredProducts = products.entries.filter((product: any) => product.programType === route);

        if (!searchValue && !range) {
          return filteredProducts;
        }

        if (searchValue && range) {
          filteredProducts = this.filterBySearchValue(searchValue, filteredProducts);
          filteredProducts = this.filterByRange(range, filteredProducts);
        } else if (searchValue) {
          filteredProducts = this.filterBySearchValue(searchValue, filteredProducts);
        } else if (range) {
          if (range[0]) {
            filteredProducts = this.filterByRange(range, filteredProducts);
          }
        }

        return filteredProducts;
      })
    );
  }

  private filterBySearchValue(serchValue: string, v: Product[]): Product[] {
    return v.filter(el => el.title.toLocaleLowerCase().includes(serchValue.toLocaleLowerCase()));
  }

  private filterByRange(range: number[], v: Product[]) {
    return v.filter(el => {
      if (range[1]) {
        return el.releaseYear <= range[1] && range[0] <= el.releaseYear;
      }
      return el.releaseYear == range[0];
    })
  }
}