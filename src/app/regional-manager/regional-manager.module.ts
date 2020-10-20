import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionalManagerPageRoutingModule } from './regional-manager-routing.module';

import { RegionalManagerPage } from './regional-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionalManagerPageRoutingModule
  ],
  declarations: [RegionalManagerPage]
})
export class RegionalManagerPageModule {}
