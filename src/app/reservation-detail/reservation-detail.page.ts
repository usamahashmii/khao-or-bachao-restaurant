import { Component, OnInit, Input } from '@angular/core';
import {  PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.page.html',
  styleUrls: ['./reservation-detail.page.scss'],
})
export class ReservationDetailPage implements OnInit {
  
  data: any;
  modelId: any;

  constructor(private popoverController:PopoverController,
    private navParams: NavParams
    ) { 
      
    this.data =  this.navParams.data.data;
 //   this.modelId = this.navParams.data.paramID;
   // this.modalTitle = this.navParams.data.paramTitle;
  }
  async DismissClick() {
    await this.popoverController.dismiss();
  }
  ngOnInit() {
  }

}
