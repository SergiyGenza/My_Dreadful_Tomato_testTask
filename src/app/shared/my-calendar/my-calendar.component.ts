import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss']
})
export class MyCalendarComponent implements OnInit {
  @Output() pickedYear = new EventEmitter<number[]>();
  openCalendar: boolean = false;
  years: number[] = [];
  visibleYears: number[] = [];
  currentPage: number = 0;
  pageSize: number = 9;
  totalPages: number;
  selectedStartYear: number;
  selectedEndYear: number;

  emptyValue: number;

  constructor() {
    this.initializeYears();
    this.calculateTotalPages();
    this.updateVisibleYears();
  }

  ngOnInit(): void {
  }

  public selectYear(year: number): void {
    if (this.selectedStartYear === year || this.selectedEndYear === year) {
      this.selectedStartYear = this.emptyValue;
      this.selectedEndYear = this.emptyValue;
    } else if (!this.selectedStartYear) {
      this.selectedStartYear = year;
    } else if (!this.selectedEndYear && year > this.selectedStartYear) {
      this.selectedEndYear = year;
    } else if (!this.selectedEndYear && !this.selectedEndYear) {
      this.selectedStartYear = this.emptyValue;
      this.selectedEndYear = this.emptyValue;
    } else {
      this.selectedStartYear = year;
      this.selectedEndYear = this.emptyValue;
    }
    this.pickedYear.emit([this.selectedStartYear, this.selectedEndYear]);
  }


  public nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVisibleYears();
    }
  }

  public prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisibleYears();
    }
  }

  public onCalendarClick() {
    this.openCalendar = !this.openCalendar;
  }

  private initializeYears(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 30; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.years.length / this.pageSize);
  }

  private updateVisibleYears(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.visibleYears = this.years.slice(startIndex, startIndex + this.pageSize);
  }

}
