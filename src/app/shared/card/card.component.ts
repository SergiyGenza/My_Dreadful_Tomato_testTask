import { Component, Input, OnInit } from '@angular/core';
import { PosterArt } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
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
