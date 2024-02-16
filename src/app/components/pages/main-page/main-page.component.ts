import { Component, OnInit } from '@angular/core';
import { MAIN_PAGE } from 'src/app/common/mocks/main-page';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  main = MAIN_PAGE;

  constructor() { }

  ngOnInit(): void {
  }

}
