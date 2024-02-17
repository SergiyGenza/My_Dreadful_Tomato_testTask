import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

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
}
