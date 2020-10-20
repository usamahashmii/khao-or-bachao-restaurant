import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DiscountPageRoutingModule } from './discount-routing.module';

import { DiscountPage } from './discount.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiscountPageRoutingModule
  ],
  declarations: [DiscountPage]
})
export class DiscountPageModule {}
