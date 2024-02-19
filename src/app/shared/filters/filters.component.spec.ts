import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent] // Додайте компонент FiltersComponent до declarations
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit range when onUserYearPick is called', () => {
    spyOn(component.range, 'emit');
    const year = [2000, 2020];
    component.onUserYearPick(year);
    expect(component.range.emit).toHaveBeenCalledWith(year);
  });

  it('should emit searchValue when filterData is called', () => {
    spyOn(component.searchValue, 'emit');
    const inputValue = 'search query';
    component.filterData(inputValue);
    expect(component.searchValue.emit).toHaveBeenCalledWith(inputValue);
  });
});
