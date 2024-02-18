import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  productslist$: Observable<Product[]>;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number;
  totalPagesArray: number[];
  some: number[];

  currentRoute: string;
  width: string = '230px';
  height: string = '300px';

  range: number[];
  searchValue: string;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
    this.currentRoute = this.router.url;
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadProducts();
  }

  public getRange(range: number[]) {
    this.range = range;
    this.loadProducts();
  }

  public getSearchValue(searchValue: string) {
    this.searchValue = searchValue;
    this.loadProducts();
  }

  public changePage(changePage: number) {
    this.currentPage = changePage;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService
      .getProducts(this.removeSlash(this.currentRoute), this.range, this.searchValue)
      .subscribe(products => {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.totalPages = Math.ceil(products.length / this.itemsPerPage);
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        this.some = this.totalPagesArray
        this.productslist$ = of(products.slice(startIndex, endIndex));
      });
  }

  private removeSlash(url: string): string {
    return url.replace(/\//g, '');
  }

}
