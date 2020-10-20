import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditDayDiscountPageRoutingModule } from './edit-day-discount-routing.module';

import { EditDayDiscountPage } from './edit-day-discount.page';

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
    EditDayDiscountPageRoutingModule
  ],
  declarations: [EditDayDiscountPage]
})
export class EditDayDiscountPageModule {}
