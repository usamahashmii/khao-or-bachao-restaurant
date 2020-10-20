import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  pet: any;

  userId: string = '';
  previousreservationDetails: any;
  upcomingreservationDetails: any;
  coverImage: any;
  distanceCalArray: Array<any>=[];
  distanceArr: Array<any>=[];

  distanceObj = {
    restaurantId: '',
    distance: ''
 };
 // prev
 distanceCalArrayPrev: Array<any>=[];
  distanceArrPrev: Array<any>=[];

  distanceObjPrev = {
    restaurantId: '',
    distance: ''
 };
 singleCategoryDataUp: any;
 singleCategoryDataPrev: any;
 loaderShow: boolean = false;

  constructor(public loader: LoaderService,
    public alertService: AlerterrorService,
    public toastService: ToasterService,
    public router: Router,
    public geolocation: Geolocation,
    public restService: RestService) { }

  ngOnInit() {
    this.pet = 'upcoming';
    this.distanceCalArray = [];
    this.distanceArr = [];
   
  }
}
