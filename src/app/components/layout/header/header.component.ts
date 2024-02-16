import { Component, OnInit } from '@angular/core';
import { HEADER } from 'src/app/common/mocks/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerMock = HEADER;

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerMock);
    
  }

}
