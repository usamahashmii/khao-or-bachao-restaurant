import { Component, NgZone, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx';
//import { googlemaps } from 'googlemaps';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlerterrorService } from '../alerterror.service';


declare var google;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private ngZone: NgZone, 
  private geolocation : Geolocation,
  public loader: LoaderService,
  public restService: RestService,
  public router:Router,
  public route: ActivatedRoute,
  public alertService: AlerterrorService
  ) {
    
    //this.getCategoryRestaurants();
    //this.addMap();
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
        
}
