import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DeviderComponent } from './devider/devider.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DeviderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
  ]
})
export class SharedModule { }
