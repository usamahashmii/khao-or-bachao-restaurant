import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { AlerterrorService } from '../alerterror.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.page.html',
  styleUrls: ['./recent.page.scss'],
})
export class RecentPage implements OnInit {

  userId: string = '';
  recentObj: any;
  recent: Array<any> = [];

  loaderShow: boolean = false;
  distanceCalArray: Array<any>=[];
  distanceArr: Array<any>=[];

  distanceObj = {
    restaurantId: '',
    distance: ''
 };

 getTopRestaurantsVar: any;
 coverImageBaseUrl: any;
 discounts: any;

  constructor(public restService: RestService,
    public geolocation: Geolocation,
    public alertService: AlerterrorService) { }
  

  ionViewWillEnter() {
   
  }

    // calculate distance
    getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2 , restaurantId) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          var d = R * c; // Distance in km
          
          return d;
      }
    
    deg2rad(deg) {
      return deg * (Math.PI/180)
    } 
  ngOnInit(){}

}
