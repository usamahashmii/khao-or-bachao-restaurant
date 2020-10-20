import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantImagePage } from './resturant-image.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantImagePageRoutingModule {}
