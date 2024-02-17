import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const url = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(programType: string) {
    return this.http.get<any>(url).pipe(
      map((data) =>
        data.entries.filter((product: any) => product.programType === programType)
      ))
  }

  getProductsSlice(products: any[], startIndex: number, endIndex: number): Observable<any[]> {
    return of(products.slice(startIndex, endIndex));
  }
}
