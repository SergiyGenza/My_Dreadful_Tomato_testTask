import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
  @Output() range = new EventEmitter<number[]>();
  @Output() searchValue = new EventEmitter<string>();

  onUserYearPick(year: number[]) {
    this.range.emit(year);
  }

  filterData(inputValue: string): void {
    this.searchValue.emit(inputValue);
  }

}
