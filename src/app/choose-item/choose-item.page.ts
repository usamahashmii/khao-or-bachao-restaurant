import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AlerterrorService } from '../alerterror.service';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-choose-item',
  templateUrl: './choose-item.page.html',
  styleUrls: ['./choose-item.page.scss'],
})
export class ChooseItemPage implements OnInit {
  resaturant_id: number;
  items_data: any;
  userId: string;
  categories_img_url: any;
  itemData: any;

  constructor(public loader: LoaderService,
    public restService: RestService,
    public router: Router,
    public storage :Storage,
    public alertService: AlerterrorService,
    public menuCtrl: MenuController) { 

     
      this.storage.get('restaurants_id').then(restaurant_id => {
        this.resaturant_id =restaurant_id;
        // this.resaturant_id = 4;
        
         //this.resaturant_id = 6;
            console.log(this.resaturant_id);
            var stringy = JSON.stringify({
              requestType : 'all',
              restaurantId :  this.resaturant_id
            });
            console.log('moeed');
            this.restService.getItems(stringy).subscribe(response => {
              this.items_data = JSON.parse(response['_body']);
              console.log(this.items_data);
              this.items_data = this.items_data.items_data;
              this.categories_img_url = this.categories_img_url;
              console.log(this.items_data);
              //this.loader.hideLoader();
            },err => {
              //this.loader.hideLoader();
              this.alertService.presentAlertService(err);
            });
        }); 
   }
   openItemDiscount(data){
     this.itemData = data;
     console.log(this.itemData);
     this.router.navigate(['/item-discount'],{
      queryParams: {
         value : JSON.stringify(this.itemData)
        },
      });
   }
  ngOnInit() {
  }
 
}
