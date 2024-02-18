import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { RemoveSymbolsPipe } from '../common/pipes/removeSymbols.pipe';
import { FiltersComponent } from './filters/filters.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { SearchPipe } from '../common/pipes/search.pipe';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    RemoveSymbolsPipe,
    FiltersComponent,
    MyCalendarComponent,
    SearchPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    RemoveSymbolsPipe,
    FiltersComponent,
    MyCalendarComponent,
    SearchPipe,
    PaginationComponent,
  ]
})
export class SharedModule { }
