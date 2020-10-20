import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseItemPageRoutingModule } from './choose-item-routing.module';

import { ChooseItemPage } from './choose-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseItemPageRoutingModule
  ],
  declarations: [ChooseItemPage]
})
export class ChooseItemPageModule {}
