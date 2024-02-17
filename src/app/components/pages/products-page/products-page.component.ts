import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/common/models/product.modet';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  subsription: Subscription;
  productslist$!: Observable<Product>;
  currentRoute: string;
  width: string = '230px';
  height: string = '300px';

  range: number[];
  searchValue: string;

  constructor(
    private router: Router,
    private products: ProductService,
  ) {
    this.currentRoute = this.router.url;
    this.productslist$ = this.products.getProducts(this.removeSlash(this.currentRoute));
  }

  ngOnInit(): void {
  }

  private removeSlash(url: string): string {
    return url.replace(/\//g, '');
  }

  public getSearchValue(searchValue: string) {
    this.searchValue = searchValue;
  }

  public getRange(range: number[]) {
    this.range = range;
  }

}
