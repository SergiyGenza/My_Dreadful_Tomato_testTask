import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { MAIN_PAGE } from 'src/app/common/mocks/main-page';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display main page content correctly', () => {
    const mainPageContent: HTMLElement = fixture.nativeElement;
    expect(mainPageContent.textContent).toContain(MAIN_PAGE.content[0].title);
    expect(mainPageContent.textContent).toContain(MAIN_PAGE.content[1].title);
    expect(mainPageContent.innerHTML).toContain(MAIN_PAGE.content[0].img);
    expect(mainPageContent.innerHTML).toContain(MAIN_PAGE.content[1].img);
  });
});
