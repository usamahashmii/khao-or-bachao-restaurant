import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-alert-confirm',
  templateUrl: './alert-confirm.page.html',
  styleUrls: ['./alert-confirm.page.scss'],
})
export class AlertConfirmPage implements OnInit {
  data: any;
  i: any;
  resaturant_id: any;
  items_id: any;
  item_delete:Boolean= false;
  constructor(private popoverController:PopoverController,
    public storage:Storage,
    public restService: RestService,
    private navParams: NavParams
    ) { 
      this.storage.get('restaurants_id').then(restaurant_id => {
        this.resaturant_id =restaurant_id;
      });
    this.items_id =  this.navParams.data.data;
    this.i =  this.navParams.data.i;
 
    //console.log(this.i);
 //   this.modelId = this.navParams.data.paramID;
   // this.modalTitle = this.navParams.data.paramTitle;
  }
  ngOnInit() {
  }
  submit(){
        var stringy = JSON.stringify({
          requestType : 'delete',
          restaurantId :  this.resaturant_id,
          itemId: this.items_id
        });
        this.restService.deleteItemURL(stringy).subscribe(response => {
          console.log(JSON.parse(response['_body']));
          this.item_delete= true;
          this.DismissClick();
         // this.deleteitemToast();
        })
  }
  async DismissClick() {
    await this.popoverController.dismiss({
        val:this.i,
        item_delete: this.item_delete
    });
  }
}
