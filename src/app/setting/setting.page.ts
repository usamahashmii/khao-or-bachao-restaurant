import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { AlerterrorService } from '../alerterror.service';
import { FirebaseauthService } from '../firebaseauth.service';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
import { ToastController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  userId: string = '';
  name: string = '';
  profileImage: string = '';
  
  loaderShow: boolean = false;
  perTimeslotBookings:any;
  allowDiscount:boolean =false;
  allowDiscounts:any;
  settingData: any;
  openingTime:any;
  address: any;
  restaurantName: any;
  getSetting: any;
  constructor(
    public menuCtrl: MenuController,
    public toastController: ToastController,
    public restService: RestService,
    public storage :Storage,
    public alertService: AlerterrorService,
    public firebase: FirebaseauthService) { }

  ngOnInit() {
    this.storage.get('restaurant_name').then(restaurant_name => {
      this.restaurantName = restaurant_name;
    });
    this.storage.get('perTimeslotBookings').then(perTimeslotBookings => {
      this.storage.get('allowDiscount').then(allowDiscount => {
        this.perTimeslotBookings = perTimeslotBookings;
        this.allowDiscount = allowDiscount;
      });
    });
    this.storage.get('restaurants_id').then(restaurants_id => {
    var stringy = JSON.stringify({
      requestType : 'get_settings',
      restaurantId :  restaurants_id
    });
    this.restService.setting(stringy).subscribe(response => {
      this.getSetting = JSON.parse(response['_body']);
      console.log('setting:  '+this.getSetting);
      this.perTimeslotBookings =  this.getSetting.settings.per_time_slot_booking_cont;
      this.address = this.getSetting.settings.location;
      console.log(this.address.settings);
      this.openingTime = this.getSetting.settings.opening_time;
      if(this.getSetting.settings.allow_discounts =='Yes'){
        this.allowDiscount = true;
      }else{
        this.allowDiscount = false;
      }
      
    },err => {
      //this.loader.hideLoader();
      this.alertService.presentAlertService(err);
    });
   })
  }
  updatebtn(){
    this.storage.get('restaurants_id').then(restaurants_id => {
      if(this.allowDiscount == true){
        this.allowDiscounts = 'Yes';
      }else{
        this.allowDiscounts = 'No';
      }
      console.log(this.allowDiscounts);
      var stringy = JSON.stringify({
        requestType : 'update_settings',
        restaurantId :  restaurants_id,
        perTimeslotBookings :this.perTimeslotBookings,
        allowDiscounts : this.allowDiscounts,
        openingTime  : this.openingTime,
        address:this.address
      });
      this.restService.updateRestaurantSettings(stringy).subscribe(response => {
        this.settingData = JSON.parse(response['_body']);
        console.log(this.settingData);
        if(this.settingData.status == 'success'){
          this.storage.set('perTimeslotBookings' , this.perTimeslotBookings);
          this.storage.set('allowDiscount' , this.allowDiscount);
          this.presentToast();
        }
       
      },err => {
        //this.loader.hideLoader();
        this.alertService.presentAlertService(err);
      });
    })
    
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Settings Updated Successfully!',
      duration: 2000
    });
    toast.present();
  }
}
