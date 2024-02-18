import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { DeviderComponent } from './devider/devider.component';
import { CardComponent } from './card/card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RemoveSymbolsPipe } from '../common/pipes/removeSymbols.pipe';
import { FiltersComponent } from './filters/filters.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { SearchPipe } from '../common/pipes/search.pipe';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    ButtonComponent,
    DeviderComponent,
    CardComponent,
    ProductCardComponent,
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
    DeviderComponent,
    CardComponent,
    RemoveSymbolsPipe,
    FiltersComponent,
    MyCalendarComponent,
    SearchPipe,
    PaginationComponent,
  ]
})
export class SharedModule { }
