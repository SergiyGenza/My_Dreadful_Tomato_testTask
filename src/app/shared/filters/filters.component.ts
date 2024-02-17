import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() range = new EventEmitter<number[]>();
  @Output() searchValue = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onUserYearPick(year: number[]) {
    this.range.emit(year)
  }

  filterData(inputValue: string): void {
    this.searchValue.emit(inputValue);
  }

}
