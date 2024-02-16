import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { DeviderComponent } from './devider/devider.component';
import { LargeCardComponent } from './large-card/large-card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DeviderComponent,
    LargeCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    DeviderComponent,
    LargeCardComponent
  ]
})
export class SharedModule { }
