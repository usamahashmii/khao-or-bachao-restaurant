import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantPaymentPage } from './resturant-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantPaymentPageRoutingModule {}
