import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsPageComponent } from './products-page.component';
import { ProductService } from 'src/app/services/product.service';
import { of } from 'rxjs';
import { Product } from 'src/app/common/models/product.model';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    productService = jasmine.createSpyObj('ProductService', ['getProducts']);

    await TestBed.configureTestingModule({
      declarations: [ProductsPageComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ProductService, useValue: productService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products', () => {
    const mockProducts: Product[] = [
      {
        title: 'American History X',
        description: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
        programType: 'movies',
        images: { url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_history_x.jpg', width: 497, height: 736 },
        releaseYear: 1998
      },
      {
        title: 'Pulp Fiction',
        description: 'The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        programType: 'movies',
        images: { url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pulp_fiction.jpg', width: 500, height: 743 },
        releaseYear: 1994
      }
    ];
    productService.getProducts.and.returnValue(of(mockProducts));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.productslist$).toBeDefined();
    component.productslist$.subscribe(products => {
      expect(products).toEqual(mockProducts.slice(0, component.itemsPerPage));
    });
  });

  it('should change page', () => {
    const mockProducts: Product[] = [
      {
        title: 'American History X',
        description: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
        programType: 'movies',
        images: { url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_history_x.jpg', width: 497, height: 736 },
        releaseYear: 1998
      },
      {
        title: 'Pulp Fiction',
        description: 'The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        programType: 'movies',
        images: { url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pulp_fiction.jpg', width: 500, height: 743 },
        releaseYear: 1994
      }
    ];
    productService.getProducts.and.returnValue(of(mockProducts));

    component.currentPage = 2;
    component.changePage(2);
    fixture.detectChanges();

    expect(component.currentPage).toEqual(2);
  });

  // Add more test cases as needed...
});
