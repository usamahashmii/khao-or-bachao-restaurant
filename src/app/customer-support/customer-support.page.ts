import { MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.page.html',
  styleUrls: ['./customer-support.page.scss'],
})
export class CustomerSupportPage implements OnInit {
  restaurantName: any;

  constructor(public storage: Storage,public menuCtrl:MenuController,public toastController:ToastController) { }

  ngOnInit() {
    this.storage.get('restaurant_name').then(restaurant_name => {
      this.restaurantName = restaurant_name;
    });
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
