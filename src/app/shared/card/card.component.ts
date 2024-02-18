import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PosterArt } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() img: string | PosterArt
  @Input() alt: string = 'product';
  @Input() url: string;

  @Input() title: string;
  @Input() description: string;
  @Input() releaseYear: number;

  @Input() width: string;
  @Input() height: string;
  @Input() cartType: 'small' | 'large' = 'large'

  constructor() { }
}
