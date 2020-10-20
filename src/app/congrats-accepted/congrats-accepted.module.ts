import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongratsAcceptedPageRoutingModule } from './congrats-accepted-routing.module';

import { CongratsAcceptedPage } from './congrats-accepted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongratsAcceptedPageRoutingModule
  ],
  declarations: [CongratsAcceptedPage]
})
export class CongratsAcceptedPageModule {}
