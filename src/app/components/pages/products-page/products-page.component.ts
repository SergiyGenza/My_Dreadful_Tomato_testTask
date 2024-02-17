import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/common/models/product.modet';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  subsription: Subscription;
  productslist$!: Observable<Product>;
  currentRoute: string;
  width: string = '230px';
  height: string = '300px'

  constructor(
    private router: Router,
    private products: ProductService,
  ) {
    this.currentRoute = this.router.url;
    ////////
    this.subsription
    // = this.products.getProducts(currentRoute).subscribe({
    //   next: (x) => console.log(x),
    //   error: (err) => console.error('Помилка при отриманні даних:', err)
    // });
    ////////////

    this.productslist$ = this.products.getProducts(this.removeSlash(this.currentRoute));
  }

  ngOnDestroy(): void {
    // this.subsription.unsubscribe();
  }

  ngOnInit(): void {
  }

  private removeSlash(url: string): string {
    return url.replace(/\//g, '');
  }

}
