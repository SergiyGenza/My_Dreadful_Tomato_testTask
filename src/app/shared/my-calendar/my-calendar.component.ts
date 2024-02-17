import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss']
})
export class MyCalendarComponent implements OnInit {
  @Output() pickedYear = new EventEmitter<number[]>();
  openCalendar: boolean = true;
  years: number[] = [];
  visibleYears: number[] = [];
  currentPage = 0;
  pageSize = 9;
  totalPages: number;
  selectedStartYear: number;
  selectedEndYear: number;

  constructor() {
    this.initializeYears();
    this.calculateTotalPages();
    this.updateVisibleYears();
  }

  ngOnInit(): void {
  }

  public selectYear(year: number): void {
    if (!this.selectedStartYear) {
      this.selectedStartYear = year;
    } else if (!this.selectedEndYear && year > this.selectedStartYear) {
      this.selectedEndYear = year;
    } else {
      this.selectedStartYear = year;
      this.selectedEndYear = null;
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
    for (let year = currentYear - 50; year <= currentYear; year++) {
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
