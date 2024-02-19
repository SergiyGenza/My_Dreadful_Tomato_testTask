import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../common/models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve products from the API', () => {
    const mockProducts = {
      entries: [
        { title: 'Product 1', programType: 'movies', releaseYear: 2000 },
        { title: 'Product 2', programType: 'series', releaseYear: 2010 }
      ]
    };

    service.getProducts('movies', [], '').subscribe(products => {
      expect(products.length).toBe(1);
      expect(products[0].title).toEqual('Product 1');
      expect(products[0].programType).toEqual('movies');
    });

    const req = httpMock.expectOne('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should filter products by search value', () => {
    const products: Product[] = [
      { title: 'Product 1', programType: 'movies', releaseYear: 2000 },
      { title: 'Product 2', programType: 'series', releaseYear: 2010 }
    ];

    const filteredProducts = service['filterBySearchValue']('Product 1', products);
    expect(filteredProducts.length).toBe(1);
    expect(filteredProducts[0].title).toEqual('Product 1');
  });

  it('should filter products by range', () => {
    const products = [
      { title: 'Product 1', programType: 'movies', releaseYear: 2000 },
      { title: 'Product 2', programType: 'series', releaseYear: 2010 }
    ];

    const filteredProducts = service['filterByRange']([2000, 2005], products);
    expect(filteredProducts.length).toBe(1);
    expect(filteredProducts[0].title).toEqual('Product 1');
  });
});
