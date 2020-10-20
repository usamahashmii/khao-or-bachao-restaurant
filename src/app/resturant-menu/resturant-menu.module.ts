import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ResturantMenuPageRoutingModule } from './resturant-menu-routing.module';

import { ResturantMenuPage } from './resturant-menu.page';

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
    ResturantMenuPageRoutingModule
  ],
  declarations: [ResturantMenuPage]
})
export class ResturantMenuPageModule {}
