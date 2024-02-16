import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent implements OnInit {
  @Input() img: string;
  @Input() alt: string;
  @Input() title: string;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
