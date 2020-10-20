import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDiscountPage } from './item-discount.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDiscountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDiscountPageRoutingModule {}
