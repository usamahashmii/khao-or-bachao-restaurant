//import { TimePeriodPage } from './../time-period/time-period.page';
import { ReservationDetailPage } from './../reservation-detail/reservation-detail.page';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlerterrorService } from '../alerterror.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { MenuController, PopoverController } from '@ionic/angular';
import { TimePeriodPage } from '../time-period/time-period.page';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userId: string;
  resaturant_id: number;
  reservation_data: any;
  periodReservation: any;
  restaurantName: any;
  showSort:boolean = false;
  constructor(public loader: LoaderService,
    public restService: RestService,
    public router: Router,
    public splash: SplashScreen,
    public popoverController: PopoverController,
    public activatedRoute : ActivatedRoute,
    public alertService: AlerterrorService,
    public storage :Storage,
    public menuCtrl: MenuController,) { 
     /* this.activatedRoute.queryParams.subscribe((res)=>{
       console.log(JSON.parse(res.value));
     
       // alert(this.jobId);
      }); */
    }
    toggleMenu(){
      this.menuCtrl.toggle();
    }
  ngOnInit() {
    this.storage.get('restaurant_name').then(restaurant_name => {
      console.log('name'+restaurant_name);
      this.restaurantName = restaurant_name;
    });
    this.storage.get('user_accounts_id').then(user_accounts_id => {
      console.log('user_accounts_id'+user_accounts_id);
    });
    this.storage.get('restaurants_id').then(restaurants_id => {
      this.storage.get('periodReservation').then(periodReservation => {
        console.log('period reservation'+periodReservation);
        if(periodReservation){
          var stringy = JSON.stringify({
            requestType : 'rest_search_by_filters',
            restaurantId :  restaurants_id,
            duration :periodReservation
          });
          this.restService.timePeriod(stringy).subscribe(response => {
            this.reservation_data = JSON.parse(response['_body']);
            this.reservation_data = this.reservation_data.reservation;
            this.periodReservation = periodReservation;
          
      
          },err => {
            //this.loader.hideLoader();
            this.alertService.presentAlertService(err);
          });


        }else{
          if(restaurants_id != '' && restaurants_id != 0 && restaurants_id != null){
            this.resaturant_id = restaurants_id;
          // this.resaturant_id = 4;
            var stringy = JSON.stringify({
              requestType : 'get_by_id',
              restaurantId :  this.resaturant_id
            });
            this.restService.getReservation(stringy).subscribe(response => {
              this.reservation_data = JSON.parse(response['_body']);
              this.reservation_data = this.reservation_data.reservation;
              console.log(this.reservation_data);
              this.periodReservation = '1 Month';
              this.showSort = true;
            //  this.reservation_data = [];
              //this.loader.hideLoader();
            },err => {
              //this.loader.hideLoader();
              this.alertService.presentAlertService(err);
            });
          }
        }
        
      });


      })
     
  }
  doRefresh(event) {
    this.storage.get('restaurants_id').then(restaurants_id => {
      this.storage.get('periodReservation').then(periodReservation => {
        console.log(periodReservation);
        if(periodReservation){
          var stringy = JSON.stringify({
            requestType : 'rest_search_by_filters',
            restaurantId :  restaurants_id,
            duration :periodReservation
          });
          this.restService.timePeriod(stringy).subscribe(response => {
            this.reservation_data = JSON.parse(response['_body']);
            this.reservation_data = this.reservation_data.reservation;
            this.periodReservation = periodReservation;
          
            event.target.complete();
          },err => {
            //this.loader.hideLoader();
            event.target.complete();
            this.alertService.presentAlertService(err);
          });


        }else{
          if(restaurants_id != '' && restaurants_id != 0 && restaurants_id != null){
            this.resaturant_id = restaurants_id;
          // this.resaturant_id = 4;
            var stringy = JSON.stringify({
              requestType : 'get_by_id',
              restaurantId :  this.resaturant_id
            });
            this.restService.getReservation(stringy).subscribe(response => {
              this.reservation_data = JSON.parse(response['_body']);
              this.reservation_data = this.reservation_data.reservation;
              console.log(this.reservation_data);
              this.periodReservation = '1 Month';
              event.target.complete();
            //  this.reservation_data = [];
              //this.loader.hideLoader();
            },err => {
              //this.loader.hideLoader();
              event.target.complete();
              this.alertService.presentAlertService(err);
            });
          }
        }
        
      });


      })
     
     
   
  }
  async GotoDetail(data){
    console.log(data);
    const popover = await this.popoverController.create({
      component: ReservationDetailPage,
      componentProps: {
        "data": data
      },
      translucent: true
    });
    return await popover.present();
  }
  async showtimePeriod(data){
    const popover = await this.popoverController.create({
      component: TimePeriodPage,
    
      translucent: true
    });
    popover.onWillDismiss().then(data => {
      if(data.data){
        console.log(data.data.val);
        this.reservation_data = data.data.val;
        this.storage.get('periodReservation').then(periodReservation => {
          this.periodReservation = periodReservation;
          console.log(this.periodReservation);
        });
      }
     
     // this.popoverReturnVal = data.data.val;
    })
    return await popover.present();
  } 
  swipeEvent(e) {
    if (e.direction == 4) {
        //direction 2 = right to left swipe.
        alert('right');
    }
}
}
