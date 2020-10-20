import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Router } from '@angular/router';
import { AlerterrorService } from '../alerterror.service';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.page.html',
  styleUrls: ['./qr-reader.page.scss'],
})
export class QrReaderPage implements OnInit {
  qrData = '';
  egString = 'khaoBchao';
  elemenyType : 'url' | 'canvas' | 'img' = 'canvas';
  restaurant_id:number;
  userId: string;
  restaurantName: any;
  constructor(public loader: LoaderService,
    public router: Router,
    //public loaderService: LoaderService,
    public storage:Storage,
    public alertService: AlerterrorService,
    public menuCtrl: MenuController,) {
     
      this.storage.get('restaurants_id').then(restaurant_id => {
        this.restaurant_id =restaurant_id;
        this.qrData = this.egString+'-'+ this.restaurant_id;
        //console.log(this.restaurant_id);
      //   this.qrData =  this.restaurant_id;
       
       }); 


   }

  ngOnInit() {
    this.storage.get('restaurant_name').then(restaurant_name => {
      this.restaurantName = restaurant_name;
    });
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
