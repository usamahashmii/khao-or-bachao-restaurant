import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FirebaseauthService } from '../firebaseauth.service';
import { AlertController } from '@ionic/angular';
import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { LoaderService } from '../loader.service';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-item-discount',
  templateUrl: './item-discount.page.html',
  styleUrls: ['./item-discount.page.scss'],
})
export class ItemDiscountPage implements OnInit {
  itemData: any;
  userId: string;
  resaturant_id: any;
  saveitemsData: any;
  item_date: any;
  item_discount: any;
  item_id: any;
  item_name: any;

  loaderShow: boolean = false;
  
  constructor(public activatedRoute : ActivatedRoute,
    public loader: LoaderService,
    public firebaseAuthService: FirebaseauthService,
    public restService: RestService,
    public alertService: AlerterrorService,
    public router: Router,
    public storage: Storage
    ) {
    
    this.activatedRoute.queryParams.subscribe((res)=>{
      //this.itemData = res.value;
     
      this.itemData =  JSON.parse(res.value);
      this.item_id = this.itemData.items_id;
      this.item_name = this.itemData.item_name;
      
     }); 
  }

  ngOnInit() {
    
  }
  submitData() {
  
    this.storage.get('restaurants_id').then(restaurant_id => {
      this.resaturant_id =restaurant_id;
      // this.resaturant_id = 4;
        var stringy = JSON.stringify({
          requestType: 'item_discount',
          restaurantId: this.resaturant_id,
          item_date:this.item_date,
          item_discount : this.item_discount,
          item_id: this.item_id
        });
        
        this.restService.saveItems(stringy).subscribe(response => {
          this.saveitemsData = JSON.parse(response['_body']);
         
          console.log(this.saveitemsData);
          this.loaderShow = false;
          this.router.navigate(['/tabs/offers']); 
        },err => {
          this.loaderShow = false;
          this.alertService.presentAlertService(err);
        });
     });
    
  }
}
