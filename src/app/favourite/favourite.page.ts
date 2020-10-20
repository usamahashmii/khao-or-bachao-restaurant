import { Component, OnInit } from '@angular/core';
import { AlerterrorService } from '../alerterror.service';
import { LoaderService } from '../loader.service';
import { ToasterService } from '../toaster.service';
import { RestService } from '../rest.service';
import { FirebaseauthService } from '../firebaseauth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage {// implements OnInit

  userId: string = ''
  favorites: any;
  loaderShow: boolean = false;

  distanceCalArray: Array<any>=[];
  distanceArr: Array<any>=[];

  distanceObj = {
    restaurantId: '',
    distance: ''
 };
 singleCategoryData: any;

 noDataText: boolean = false;
 cityName: string = '';
  constructor(public alertService: AlerterrorService,
    public router: Router,
    public loader: LoaderService,
    public toastService: ToasterService,
    public restService: RestService,
    public geolocation: Geolocation,
    public menuCtrl: MenuController,
    public storage: Storage,
    public firebase: FirebaseauthService) { }

  ionViewWillEnter(){
    this.storage.get('country').then((val) => {
      // console.log('Your age is', val);
      this.cityName = val;
     });
    }
    
    //open search openSearchRestaurant()
    openSearchRestaurant(){
      this.router.navigate(['/searchrestaurant']);
    }
}
