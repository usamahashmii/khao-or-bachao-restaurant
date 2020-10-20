import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertConfirmPageRoutingModule } from './alert-confirm-routing.module';

import { AlertConfirmPage } from './alert-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertConfirmPageRoutingModule
  ],
  declarations: [AlertConfirmPage]
})
export class AlertConfirmPageModule {}
