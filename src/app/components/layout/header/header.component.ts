import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HEADER } from 'src/app/common/mocks/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerMock = HEADER;
  showBtn: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayButton(btn): boolean {
    const currentRoute = this.router.url;
    if (currentRoute === '/' && btn.showOnMain === false) {
      return false;
    } else {
      return true;
    }
  }
}
