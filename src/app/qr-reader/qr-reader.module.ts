import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrReaderPageRoutingModule } from './qr-reader-routing.module';

import { QrReaderPage } from './qr-reader.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrReaderPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [QrReaderPage]
})
export class QrReaderPageModule {}
