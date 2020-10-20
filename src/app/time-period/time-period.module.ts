import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimePeriodPageRoutingModule } from './time-period-routing.module';

import { TimePeriodPage } from './time-period.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimePeriodPageRoutingModule
  ],
  declarations: [TimePeriodPage]
})
export class TimePeriodPageModule {}
