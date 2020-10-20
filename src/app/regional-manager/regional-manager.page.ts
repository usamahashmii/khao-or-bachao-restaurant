import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-regional-manager',
  templateUrl: './regional-manager.page.html',
  styleUrls: ['./regional-manager.page.scss'],
})
export class RegionalManagerPage implements OnInit {

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
