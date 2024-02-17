import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  currentRange: number[];

  ngOnInit(): void {
  }

  onUserYearPick(year: number[]) {
    this.currentRange = year;
    console.log(this.currentRange);
  }

}
