import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() totalPagesArray: number[];
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.changePage.emit(this.currentPage)
  }

}
