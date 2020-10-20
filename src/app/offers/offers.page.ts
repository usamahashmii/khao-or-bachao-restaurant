import { OfferDetailPage } from './../offer-detail/offer-detail.page';
import { MenuController, PopoverController } from '@ionic/angular';
import { ToasterService } from './../toaster.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestService } from '../rest.service';
import { AlerterrorService } from '../alerterror.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  clickCheck: boolean = false;
  showDiv: boolean  = false;

  userId: string;
  resaturant_id: number;
  reservation_data: any;

  discountOnDays: any;
  itemOffers: any;
  discountDeleteResponse: any;
  restaurantName: any;
  
  constructor(
    public popoverController:PopoverController,
    public menuCtrl:MenuController,
    public toastService:ToasterService,
    public router: Router,
    public restService: RestService,
    public storage :Storage,
    public alertService: AlerterrorService) {
    console.log('offer');
  }
  ngOnInit(){

  }
  discount_delete(id){
    var stringy = JSON.stringify({
      requestType: 'delete_discount',
      discountId: id
    });
    this.restService.discountDelete(stringy).subscribe(response => {
      this.discountDeleteResponse = JSON.parse(response['_body']);
      if(this.discountDeleteResponse.status =='success'){
        
        this.callDiscount();
        this.toastService.presentToastMessage('Discount Deleted Successfully');
      }
    });
  }
  goToMenuTab(){
    this.router.navigate(['/choose-item']);
  }
  onPress($event) {
    console.log("onPress", $event);
}

  onPressUp($event) {
      console.log("onPressUp", $event);
  }
  click(){
    console.log('ckuc');
  }
  pressed(){
    console.log('pressed');
  }
  active(){
    console.log('active');
  }
  released(){
    console.log('released');
}

  goToDiscount(){
    this.router.navigate(['/discount']);  
  }

  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;
  friday: any
  saturday: any;
  sunday: any;

  mondayStatus: boolean = false;
  tuesdayStatus: boolean = false;
  wednesdayStatus: boolean = false;
  thursdayStatus: boolean = false;
  fridayStatus: boolean = false;
  saturdayStatus: boolean = false;
  sundayStatus: boolean = false;

  ionViewWillEnter() {
  
      this.callDiscount();
      this.storage.get('restaurant_name').then(restaurant_name => {
        this.restaurantName = restaurant_name;
      });
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  callDiscount(){
    //alert('true');
    this.storage.get('restaurants_id').then(restaurant_id => {
      this.resaturant_id =restaurant_id;
      // this.resaturant_id = 4;
      var stringy = JSON.stringify({
        requestType: 'get_day_discounts',
        restaurantId: this.resaturant_id
      });
      this.mondayStatus = false;
      this.tuesdayStatus = false;
      this.wednesdayStatus = false;
      this.thursdayStatus = false;
      this.fridayStatus = false;
      this.saturdayStatus = false;
      this.sundayStatus = false;
      this.restService.discountShow(stringy).subscribe(response => {
        this.discountOnDays = JSON.parse(response['_body']);
        if(this.discountOnDays.status == 'Found'){
          this.monday =  this.discountOnDays.Monday;
      
          this.tuesday =  this.discountOnDays.Tuesday;
          this.wednesday =  this.discountOnDays.Wednesday;
          this.thursday =  this.discountOnDays.Thursday;
          this.friday =  this.discountOnDays.Friday;
          this.saturday =  this.discountOnDays.Saturday;
          this.sunday =  this.discountOnDays.Sunday;

          if(this.monday.length > 0){
            this.mondayStatus = true;
          }
          if(this.tuesday.length > 0){
            this.tuesdayStatus = true;
          }
          if(this.friday.length > 0){
            this.fridayStatus = true;
          }
          if(this.wednesday.length > 0){
            this.wednesdayStatus = true;
          }
          if(this.thursday.length > 0){
            this.thursdayStatus = true;
          }
          if(this.saturday.length > 0){
            this.saturdayStatus = true;
          }
          if(this.sunday.length > 0){
            this.sundayStatus = true;
          }
          //this.reservation_data = this.reservation_data.reservation;
          console.log(this.discountOnDays);
        }else {
          console.log('no data');
        }
        
      
      },err => {
        this.alertService.presentAlertService(err);
      });
  
   
})
  }
  doRefresh(event) {
   
    this.storage.get('restaurants_id').then(restaurant_id => {
      this.resaturant_id =restaurant_id;
      // this.resaturant_id = 4;
      var stringy = JSON.stringify({
        requestType: 'get_day_discounts',
        restaurantId: this.resaturant_id
      });
      this.mondayStatus = false;
      this.tuesdayStatus = false;
      this.wednesdayStatus = false;
      this.thursdayStatus = false;
      this.fridayStatus = false;
      this.saturdayStatus = false;
      this.sundayStatus = false;
      this.restService.discountShow(stringy).subscribe(response => {
        this.discountOnDays = JSON.parse(response['_body']);
        if(this.discountOnDays.status == 'Found'){
          this.monday =  this.discountOnDays.Monday;
      
          this.tuesday =  this.discountOnDays.Tuesday;
          this.wednesday =  this.discountOnDays.Wednesday;
          this.thursday =  this.discountOnDays.Thursday;
          this.friday =  this.discountOnDays.Friday;
          this.saturday =  this.discountOnDays.Saturday;
          this.sunday =  this.discountOnDays.Sunday;

          if(this.monday.length > 0){
            this.mondayStatus = true;
          }
          if(this.tuesday.length > 0){
            this.tuesdayStatus = true;
          }
          if(this.friday.length > 0){
            this.fridayStatus = true;
          }
          if(this.wednesday.length > 0){
            this.wednesdayStatus = true;
          }
          if(this.thursday.length > 0){
            this.thursdayStatus = true;
          }
          if(this.saturday.length > 0){
            this.saturdayStatus = true;
          }
          if(this.sunday.length > 0){
            this.sundayStatus = true;
          }
          //this.reservation_data = this.reservation_data.reservation;
          console.log(this.discountOnDays);
        }else {
          console.log('no data');
        }
        
        event.target.complete();
      },err => {
        event.target.complete();
        this.alertService.presentAlertService(err);
      });
  
   
})
     
  
  }
  editDayDiscount(data){
    console.log(data);
    var myData = JSON.stringify({
      data: data
    });
     this.router.navigate(['/edit-day-discount'],{
      queryParams: {
         value : myData
        },
      });
  }
  showDetailDay(data){
    console.log(data);
    var myData = JSON.stringify({
      data: data
    });
    this.router.navigate(['/offer-detail'],{
      queryParams: {
         value : myData
        },
      });
  }
}
