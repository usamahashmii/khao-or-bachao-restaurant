import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlerterrorService } from '../alerterror.service';
@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.page.html',
  styleUrls: ['./time-period.page.scss'],
})
export class TimePeriodPage implements OnInit {
  color:any;
  resaturant_id: any;
  reservation_data: any;
  userId: string;
  current:boolean;
  lastMonth:boolean;
  lasthreeMonth:boolean;
  lastsixMonth:boolean;
  lastyear:boolean;
  constructor(public alertService: AlerterrorService,public storage :Storage,public router: Router,public restService: RestService,private popoverController:PopoverController,) { }

  ngOnInit() {
  }
  showReservation(value,i){

    if(i == 0){
      this.current=true;
    }else if(i == 1){
      this.lastMonth=true;
    }else if(i == 2){
      this.lasthreeMonth=true;
    }else if(i == 3){
      this.lastsixMonth=true;
    }else if(i == 4){
      this.lastyear=true;
    }

    this.storage.set('periodReservation' , value);

    this.storage.get('restaurants_id').then(restaurants_id => {
      console.log('restaurants_id'+restaurants_id);
      if(restaurants_id != '' && restaurants_id != 0 && restaurants_id != null){
          this.resaturant_id = restaurants_id;
          
          var stringy = JSON.stringify({
            requestType : 'rest_search_by_filters',
            restaurantId :  this.resaturant_id,
            duration :value
          });
        this.restService.timePeriod(stringy).subscribe(response => {
          this.reservation_data = JSON.parse(response['_body']);
          this.reservation_data = this.reservation_data.reservation;
          console.log(this.reservation_data);
          this.DismissClick(this.reservation_data);
    
        },err => {
          //this.loader.hideLoader();
          this.alertService.presentAlertService(err);
        });
  }
})
 

  }
  async DismissClick(data) {
    await this.popoverController.dismiss({
        val:data
    });
  }
  async Dismiss() {
    await this.popoverController.dismiss();
  }
}
