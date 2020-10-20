import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseconfigService } from './firebaseconfig.service';
import { FirebaseauthService } from './firebaseauth.service';
import { SignupPageModule } from './signup/signup.module';
import { LoginPageModule } from './login/login.module';
import { ProfilePageModule } from './profile/profile.module';

import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { HttpModule } from "@angular/http";
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { Network } from '@ionic-native/network/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapPageModule } from './map/map.module';
import { DistancePipe } from './distance.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { OneSignal } from '@ionic-native/onesignal/ngx';

@NgModule({
  declarations: [AppComponent, DistancePipe],
  entryComponents: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    SignupPageModule,
    LoginPageModule,
    ProfilePageModule,
    MapPageModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseconfigService,
    FirebaseauthService,
    Camera,
    Network,
    Geolocation,
    QRScanner,
    BarcodeScanner,
    OneSignal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
