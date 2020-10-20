import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AlerterrorService } from '../alerterror.service';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-discount',
  templateUrl: './discount.page.html',
  styleUrls: ['./discount.page.scss'],
})
export class DiscountPage implements OnInit {
  userId: string;
  resaturant_id: any;
  Days:any;
  Discount:any;
  time:any;
  items_data: any;
  discountform: FormGroup;
  Hours:any;
  Mins:any;
  Secs:any;
  isSubmit:Boolean = true;
  constructor(public loader: LoaderService,
    public restService: RestService,
    public router: Router,
    public alertService: AlerterrorService,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public menuCtrl: MenuController) { 

      this.storage.get('restaurants_id').then(restaurant_id => {
        this.resaturant_id =restaurant_id;
      }); 

      this.discountform = formBuilder.group({
        Days: ['', Validators.required], 
        Discount: ['', Validators.required],
        Hours: ['', Validators.required],
        Mins: ['', Validators.required],
        Secs: ['', Validators.required]
      //  time: ['', Validators.required]
      });
    }

  ngOnInit() {
  }
 submitDiscount(){
  if (!this.discountform.valid) {
    console.log('Please provide all the required values!');
    this.isSubmit = false;
    return false;
  } else {
   /* var ex = this.time.split( 'T',5 )[1];
    var ex1 = ex.split( '.');
    this.time =  ex1[0]; */
    this.time = this.Hours+':'+this.Mins+' '+this.Secs;
    console.log(this.time);
    var stringy = JSON.stringify({
      requestType : 'day_discount',
      restaurantId :  this.resaturant_id,
      dayName :  this.Days,
      discountVal :  this.Discount,
      discountTime:this.time,
    });
    console.log(stringy);
    this.loader.presentLoader();
    this.restService.postOnDaysDiscount(stringy).subscribe(response => {
      this.items_data = JSON.parse(response['_body']);
      console.log(this.items_data);
      this.loader.hideLoader();
      this.router.navigate(['/tabs/offers']); 
    },err => {
      this.loader.hideLoader();
      this.alertService.presentAlertService(err);
    });
  }
 }
}
