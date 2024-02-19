import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { HEADER } from 'src/app/common/mocks/header';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display button on main page when showOnMain is true', () => {
    spyOnProperty(router, 'url').and.returnValue('/');
    component.headerMock = HEADER;
    component.showBtn = true;
    const result = component.displayButton(HEADER[0]);
    expect(result).toBeTrue();
  });

  it('should not display button on main page when showOnMain is false', () => {
    spyOnProperty(router, 'url').and.returnValue('/');
    component.headerMock = HEADER;
    component.showBtn = false;
    const result = component.displayButton(HEADER[1]);
    expect(result).toBeFalse();
  });

  it('should display button on non-main page', () => {
    spyOnProperty(router, 'url').and.returnValue('/movies');
    component.headerMock = HEADER;
    component.showBtn = true;
    const result = component.displayButton(HEADER[0]);
    expect(result).toBeTrue();
  });

  it('should not display button on non-main page when showOnMain is false', () => {
    spyOnProperty(router, 'url').and.returnValue('/movies');
    component.headerMock = HEADER;
    component.showBtn = false;
    const result = component.displayButton(HEADER[1]);
    expect(result).toBeFalse();
  });
});
