import { AlertConfirmPage } from './../alert-confirm/alert-confirm.page';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { AlerterrorService } from '../alerterror.service';
import { MenuController, ToastController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  resaturant_id: number;
  items_data: any;
  userId: string;
  items_img_url: any;
  restaurantName: any;

  constructor(public loader: LoaderService,
    public restService: RestService,
    public router: Router,
    public alertService: AlerterrorService,
    public storage:Storage,
    public menuCtrl: MenuController,
    public toastController: ToastController,
    public popoverController: PopoverController,
    public alertController: AlertController) { 

      
   }

  ngOnInit() {
    this.storage.get('restaurant_name').then(restaurant_name => {
      this.restaurantName = restaurant_name;
    });
  }
  ionViewWillEnter(){
    this.storage.get('restaurants_id').then(restaurant_id => {
      this.resaturant_id =restaurant_id;
      
       //this.resaturant_id = 6;
          console.log(this.resaturant_id);
          var stringy = JSON.stringify({
            requestType : 'all',
            restaurantId :  this.resaturant_id
          });
         
          this.restService.getItems(stringy).subscribe(response => {
            this.items_data = JSON.parse(response['_body']);
            console.log(this.items_data);
            this.items_data = this.items_data.items_data;
            this.items_img_url = this.items_data.items_img_url;
            console.log(this.items_data);
            //this.loader.hideLoader();
          },err => {
            //this.loader.hideLoader();
            this.alertService.presentAlertService(err);
          });
      }); 
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  doRefresh(event) {
    this.storage.get('restaurants_id').then(restaurant_id => {
      this.resaturant_id =restaurant_id;
      
       //this.resaturant_id = 6;
          console.log(this.resaturant_id);
          var stringy = JSON.stringify({
            requestType : 'all',
            restaurantId :  this.resaturant_id
          });
         
          this.restService.getItems(stringy).subscribe(response => {
            this.items_data = JSON.parse(response['_body']);
            console.log(this.items_data);
            this.items_data = this.items_data.items_data;
            this.items_img_url = this.items_data.items_img_url;
            console.log(this.items_data);
            //this.loader.hideLoader();
            event.target.complete();
          },err => {
            event.target.complete();
            //this.loader.hideLoader();
            this.alertService.presentAlertService(err);
          });
      }); 
      
   
  }
  itemEdit(data,i){
    console.log(data);
    var html = '';
    html+='<ion-card class="ed" ><ion-row class="main_top">';
    html+='<p class="m_b2">'+data.item_name+'</p>';
    html+='<ion-row class="md_left">';
    html+='<ion-col class="m_b1 single_item_delete_'+i+'" size="12">';
    html+='<ion-icon ios="ios-trash" md="md-trash" ></ion-icon>';
    html+='<span>Delete</span>';
    html+='</ion-col>';
    html+='<ion-col class="m_b1 single_item_edit_'+i+'" size="12" >';
    html+='<ion-icon ios="ios-create" md="md-create" ></ion-icon>';
    html+='<span>Edit</span>';
    html+='</ion-col>';
    html+='<ion-col class="m_b1 btn_dismiss_'+i+'" size="12">';
    html+='<ion-icon ios="ios-close" md="md-close" ></ion-icon>';
    html+='<span>Dismiss</span>';
    html+='</ion-col>';
    html+='</ion-row>';
    html+='</ion-row>';
    html+='</ion-card >';
    var obj = document.querySelector('.item_'+i+'');
    obj.innerHTML = html;
    /* btn dismiss */
    let btn = document.querySelector('.btn_dismiss_'+i+'');
    btn.addEventListener("click", (e:Event) => this.itemdismiss(data,i));
     /* btn dismiss */
     /* btn edit */
     let btnEdit = document.querySelector('.single_item_edit_'+i+'');
     btnEdit.addEventListener("click", (e:Event) => this.signleitemEdit(data,i));
     /* btn edit */
     /* btn delete */
     let btnDelete = document.querySelector('.single_item_delete_'+i+'');
     btnDelete.addEventListener("click", (e:Event) => this.itemdelete(data,i));
     /* btn delete */
  }
  itemdelete(data, i){
    this.AlertConfirm(data.items_id ,i);
  }
  async AlertConfirm(items_id,i){
    const popover = await this.popoverController.create({
      component: AlertConfirmPage,
      componentProps: {
        "data": items_id,
        "i": i
      },
      translucent: true
    });
    popover.onWillDismiss().then(data => {
      if(data.data){
        console.log(data.data.val);
        console.log(data.data.item_delete);
        if(data.data.item_delete == true){
          document.querySelector('.item_'+data.data.val+'').remove();
          this.deleteitemToast();
        }
        
      }
     
     // this.popoverReturnVal = data.data.val;
    })
    return await popover.present();
  } 
  async presentAlertConfirm(items_id,i) {
    const alert = await this.alertController.create({
     // header: '',
      message: '<ion-icon ios="ios-trash" md="md-trash" ></ion-icon>Are you sure you want to <strong>Delete</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            var stringy = JSON.stringify({
              requestType : 'delete',
              restaurantId :  this.resaturant_id,
              itemId: items_id
            });
            this.restService.deleteItemURL(stringy).subscribe(response => {
              console.log(JSON.parse(response['_body']));
              document.querySelector('.item_'+i+'').remove();
              this.deleteitemToast();
            })
          }
        }
      ]
    });
    await alert.present();
  }
  async deleteitemToast() {
    const toast = await this.toastController.create({
      message: 'Item Deleted Successfully.',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  signleitemEdit(data,i){
    console.log(data); 
    var myData = JSON.stringify({
      data: data,
    });
      this.router.navigate(['/item-edit'],{
      queryParams: {
         value : myData
        },
      });
  }
  itemdismiss(data,i){
    var html = '';
   
    var url="https://dev.khaoaurbachao.com/image.php?image=assets/admin/images/items_images/item_here&height=300px&width=300px&zc=1&ct=0";
    var data_img = url.replace('item_here', data.item_image);
    console.log(data);
    html+='<ion-card class="g_card item_edit_'+i+'">';
    html+='<ion-card-header class="g_header">';
    html+='  <img src="'+data_img+'" class="g_img"> ';
    html+='</ion-card-header>';
    html+='<ion-card-subtitle class="g_subtitle">'+data.item_name+'</ion-card-subtitle>';
    html+='<ion-card-content class="g_content">';
    html+='  <ion-row>';
    html+='    <ion-col class="g_pad"  text-center>';
    html+='      '+data.quantity+' Pices Per '+data.measurement+'';
    html+='    </ion-col>';
    html+='  </ion-row>';
    html+='  <ion-row>';
    html+='    <ion-col class="g_pad" text-center>';
    html+='      '+data.price+' Per '+data.measurement+'';
    html+='   </ion-col>';
    html+='  </ion-row>';
    html+='</ion-card-content>';
    html+='</ion-card>';
    var obj = document.querySelector('.item_'+i+'');
    obj.innerHTML = html;

    let btn = document.querySelector('.item_edit_'+i+'');
    btn.addEventListener("click", (e:Event) => this.itemEdit(data,i));
  }
}
