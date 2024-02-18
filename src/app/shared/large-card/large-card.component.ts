import { Component, Input, OnInit } from '@angular/core';
import { PosterArt } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent implements OnInit {
  @Input() img: string | PosterArt
  @Input() alt: string = 'product';
  @Input() url: string;

  @Input() title: string;
  @Input() description: string;
  @Input() releaseYear: number;

  @Input() width: string;
  @Input() height: string;
  @Input() cartType: 'small' | 'large' = 'large'

  showDescription: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
