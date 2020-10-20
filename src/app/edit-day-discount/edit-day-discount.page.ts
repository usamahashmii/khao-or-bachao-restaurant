import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlerterrorService } from '../alerterror.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-day-discount',
  templateUrl: './edit-day-discount.page.html',
  styleUrls: ['./edit-day-discount.page.scss'],
})
export class EditDayDiscountPage implements OnInit {
  dayDiscount: any;
  userId: string;
  resaturant_id: any;
  Days:any;
  Discount:any;
  time:any;
  items_data: any;
  discounts_id: any;
  day_name: any;
  discountform: FormGroup;
  isSubmit:Boolean = true;
  constructor( public formBuilder: FormBuilder,public toastController: ToastController, public storage: Storage,public alertService: AlerterrorService,public router: Router,public restService :RestService,public activatedRoute : ActivatedRoute,public loader: LoaderService,) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.dayDiscount = JSON.parse(res.value);
      this.Discount = this.dayDiscount.data.discount_rate;
      this.time    =  this.dayDiscount.data.start_time;
      this.discounts_id    =  this.dayDiscount.data.discounts_id;
      this.Days    =  this.dayDiscount.data.day_name;
      
    }); 
    this.storage.get('restaurants_id').then(restaurant_id => {
      this.resaturant_id =restaurant_id;
       
    });
    
      this.discountform = formBuilder.group({
        Days: ['', Validators.required],
        Discount: ['', Validators.required],
        time: ['', Validators.required]
      });
  }

  ngOnInit() {

  }
   
  submitDiscount(){
    console.log(this.time);
    
    /*var ex = this.time.split( 'T',5 )[1];
    var ex1 = ex.split( '.');
    this.time =  ex1[0];*/
    if (!this.discountform.valid) {
      console.log('Please provide all the required values!');
      this.isSubmit = false;
      return false;
    } else {
    var stringy = JSON.stringify({
      requestType : 'update_day_discount',
      discountId: this.discounts_id,
      restaurantId :  this.resaturant_id,
      dayName :  this.Days,
      discountVal :  this.Discount,
      discountTime:this.time,
    });
    console.log(stringy);
    this.loader.presentLoader();
    this.restService.updateOnDaysDiscount(stringy).subscribe(response => {
      this.items_data = JSON.parse(response['_body']);
      console.log(this.items_data);
      this.presentToast();
      this.loader.hideLoader();

      this.router.navigate(['/tabs/offers']); 
    },err => {
      this.loader.hideLoader();
      this.alertService.presentAlertService(err);
    });
  }
   }
   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Discount Updated Successfully!',
      duration: 2000
    });
    toast.present();
  }
}
