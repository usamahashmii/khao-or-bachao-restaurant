import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglerestaurantPageRoutingModule } from './singlerestaurant-routing.module';

import { SinglerestaurantPage } from './singlerestaurant.page';
import { StarRatingModule } from 'ionic4-star-rating';
import { PipesModule } from '../pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SinglerestaurantPageRoutingModule,
    StarRatingModule
  ],
  declarations: [SinglerestaurantPage]
})
export class SinglerestaurantPageModule {}
