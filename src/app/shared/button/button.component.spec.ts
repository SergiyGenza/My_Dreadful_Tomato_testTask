import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title correctly', () => {
    const title = 'Click me';
    component.title = title;
    fixture.detectChanges();
    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent).toContain(title);
  });

  it('should set icon correctly', () => {
    const icon = 'fa fa-icon';
    component.icon = icon;
    fixture.detectChanges();
    const iconElement: HTMLElement = fixture.nativeElement.querySelector('.icon');
    expect(iconElement.classList).toContain(icon);
  });

  it('should set iconAlt correctly', () => {
    const iconAlt = 'icon-alt-text';
    component.iconAlt = iconAlt;
    fixture.detectChanges();
    const iconElement: HTMLElement = fixture.nativeElement.querySelector('.icon');
    expect(iconElement.getAttribute('alt')).toEqual(iconAlt);
  });

  it('should set btnClass correctly', () => {
    const btnClass = 'btn-primary';
    component.btnClass = btnClass;
    fixture.detectChanges();
    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList).toContain(btnClass);
  });

  it('should set url correctly', () => {
    const url = '/path/to/page';
    component.url = url;
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.getAttribute('routerLink')).toEqual(url);
  });
});
