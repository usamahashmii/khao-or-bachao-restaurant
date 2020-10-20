import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ResturantPaymentPageRoutingModule } from './resturant-payment-routing.module';

import { ResturantPaymentPage } from './resturant-payment.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    ResturantPaymentPageRoutingModule
  ],
  declarations: [ResturantPaymentPage]
})
export class ResturantPaymentPageModule {}
