import { Component, OnInit } from '@angular/core';
import { FOOTER } from 'src/app/common/mocks/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer = FOOTER;

  constructor() { }

  ngOnInit(): void {
  }

}
