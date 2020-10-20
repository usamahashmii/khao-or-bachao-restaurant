import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationDetailPageRoutingModule } from './reservation-detail-routing.module';

import { ReservationDetailPage } from './reservation-detail.page';
import { PipesModule } from '../pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationDetailPageRoutingModule,
    PipesModule
  ],
  declarations: [ReservationDetailPage]
})
export class ReservationDetailPageModule {}
