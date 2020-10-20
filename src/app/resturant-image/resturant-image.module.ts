import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResturantImagePageRoutingModule } from './resturant-image-routing.module';

import { ResturantImagePage } from './resturant-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResturantImagePageRoutingModule
  ],
  declarations: [ResturantImagePage]
})
export class ResturantImagePageModule {}
