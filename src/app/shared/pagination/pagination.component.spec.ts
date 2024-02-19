import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changePage event when onPageChange is called', () => {
    spyOn(component.changePage, 'emit');
    const pageNumber = 2;
    component.onPageChange(pageNumber);
    expect(component.currentPage).toEqual(pageNumber);
    expect(component.changePage.emit).toHaveBeenCalledWith(pageNumber);
  });
});
  