import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ResturantSetupPageRoutingModule } from './resturant-setup-routing.module';

import { ResturantSetupPage } from './resturant-setup.page';
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
    ResturantSetupPageRoutingModule
  ],
  declarations: [ResturantSetupPage]
})
export class ResturantSetupPageModule {}
