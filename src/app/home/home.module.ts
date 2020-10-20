import { TimePeriodPageModule } from './../time-period/time-period.module';
import { ReservationDetailPageModule } from './../reservation-detail/reservation-detail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReservationDetailPageModule,
    TimePeriodPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
