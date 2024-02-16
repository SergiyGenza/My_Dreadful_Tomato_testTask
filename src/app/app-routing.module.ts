import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'movies',
    component: ProductsPageComponent,
    data: { breadcrumb: 'movies' }
  },
  {
    path: 'series',
    component: ProductsPageComponent,
    data: { breadcrumb: 'series' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
