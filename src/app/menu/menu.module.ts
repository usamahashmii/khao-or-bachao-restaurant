import { AlertConfirmPageModule } from './../alert-confirm/alert-confirm.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { PipesModule } from '../pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    AlertConfirmPageModule,
    PipesModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
