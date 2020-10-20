import { ToasterService } from './../toaster.service';
import { RestService } from './../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage implements OnInit {
  dayDiscount: any;
  discounts: any;
  restaurantName: any;
  discountDeleteResponse: any;

  constructor(public router:Router,public toastService:ToasterService,public restService: RestService,public storage:Storage,public activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.dayDiscount = JSON.parse(res.value);
      this.discounts =this.dayDiscount.data;
    }); 
   }

  ngOnInit() {
    this.storage.get('restaurant_name').then(restaurant_name => {
      this.restaurantName = restaurant_name;
    });
  }
  discount_delete(id){
    var stringy = JSON.stringify({
      requestType: 'delete_discount',
      discountId: id
    });
    this.restService.discountDelete(stringy).subscribe(response => {
      this.discountDeleteResponse = JSON.parse(response['_body']);
      if(this.discountDeleteResponse.status =='success'){
        this.router.navigate(['/tabs/offers']);
        this.toastService.presentToastMessage('Discount Deleted Successfully');
      }
    });
  }
}
