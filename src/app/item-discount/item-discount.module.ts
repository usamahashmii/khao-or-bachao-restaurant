import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDiscountPageRoutingModule } from './item-discount-routing.module';

import { ItemDiscountPage } from './item-discount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDiscountPageRoutingModule
  ],
  declarations: [ItemDiscountPage]
})
export class ItemDiscountPageModule {}
