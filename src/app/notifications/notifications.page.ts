import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  userId: string = '';
  notifications: any;
  restaurantName: any;
  
  constructor(
    public menuCtrl:MenuController,
    public storage:Storage,
    public loader: LoaderService,
    public alertService: AlerterrorService,
    public toastService: ToasterService,
    public restService: RestService) { }

  ngOnInit() {
    this.storage.get('restaurant_name').then(restaurant_name => {
      this.restaurantName = restaurant_name;
    });
    
   
  }
  ionViewWillEnter(){
    this.storage.get('restaurants_id').then(restaurants_id => {
      this.storage.get('email').then(email => {
        console.log('name'+restaurants_id);
        
        var stringy=JSON.stringify({
          restaurantId: restaurants_id,
          email:email,
          requestType: 'restaurant'
    
        });
        this.loader.presentLoader();
        this.restService.getNotifications(stringy).subscribe(response => {
          console.log(response['_body']);
          this.notifications = JSON.parse(response['_body']);
          this.notifications = this.notifications.notifications;
          this.loader.hideLoader();
        },err => {
          this.loader.hideLoader();
          this.alertService.presentAlertService(err);
        }); 
      });
    });
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
