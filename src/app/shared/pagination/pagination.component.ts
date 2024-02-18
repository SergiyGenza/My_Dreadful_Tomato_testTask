import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() totalPagesArray: number[];
  @Output() changePage = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    // this.pagesToArray()

  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.changePage.emit(this.currentPage)
  }

}
