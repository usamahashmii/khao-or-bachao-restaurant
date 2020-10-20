import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { RestService } from '../rest.service';
import { AlerterrorService } from '../alerterror.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-singlerestaurant',
  templateUrl: './singlerestaurant.page.html',
  styleUrls: ['./singlerestaurant.page.scss'],
})
export class SinglerestaurantPage implements OnInit {

  restaurantId: any;
  loaderShow: boolean = false;
  restaurantDetail: any;
  discounts: any;
  restaurantImageUrl: any;
  deals: any;
  map:any;

  showMap: boolean = false;

  distanceCalArray: Array<any>=[];
  distanceArr: Array<any>=[];

  distanceObj = {
    restaurantId: '',
    distance: ''
 };
 
 openingHours: any;
 aboutText: any;
 
 mydate: any;
 personCount: any;

 pet: any;
 favorites: any;
 favRestaurant: boolean = false;

 date: string = '';
 
  constructor(public router: Router,
    public route: ActivatedRoute,
    public modalCtrl: ModalController,
    public geolocation: Geolocation,
    public restService: RestService,
    public toastService: ToasterService,
    public alertService: AlerterrorService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
