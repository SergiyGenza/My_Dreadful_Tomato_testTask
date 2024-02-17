import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { DeviderComponent } from './devider/devider.component';
import { LargeCardComponent } from './large-card/large-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RemoveSymbolsPipe } from '../common/pipes/removeSymbols.pipe';
import { FiltersComponent } from './filters/filters.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    DeviderComponent,
    LargeCardComponent,
    ProductCardComponent,
    RemoveSymbolsPipe,
    FiltersComponent,
    MyCalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ButtonComponent,
    DeviderComponent,
    LargeCardComponent,
    RemoveSymbolsPipe,
    FiltersComponent,
    MyCalendarComponent
  ]
})
export class SharedModule { }
