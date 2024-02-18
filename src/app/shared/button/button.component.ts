import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() iconAlt: string;
  @Input() btnClass: string;
  @Input() url: string;

  constructor() { }
}
