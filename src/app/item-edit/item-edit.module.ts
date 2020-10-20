import { PipesModule } from './../pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ItemEditPageRoutingModule } from './item-edit-routing.module';

import { ItemEditPage } from './item-edit.page';

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
    ItemEditPageRoutingModule,
    PipesModule
  ],
  declarations: [ItemEditPage]
})
export class ItemEditPageModule {}
