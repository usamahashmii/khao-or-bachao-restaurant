import { ToasterService } from './../toaster.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { AlerterrorService } from '../alerterror.service';
import { AlertController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { LoaderService } from '../loader.service';
import { Storage } from '@ionic/storage';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.page.html',
  styleUrls: ['./item-edit.page.scss'],
})
export class ItemEditPage implements OnInit {
  
  public addMenuform: FormGroup;
  isSubmit:Boolean = true;
  itemName:any;
  measurement:any;
  quantity:any;
  priceRange:any;
  itemPrice:any;
  itemData: any;
  menuImg:any;
  categoryItemValue:any;
  category: any;
  serverImageData: any;
  userId: any;
  resaturant_id: any;
  restaurant_data: any;
  items_id: any;
  constructor(public toastservice:ToasterService, public formBuilder: FormBuilder,public router: Router,public loader: LoaderService,private storage: Storage, public alertCtrl: AlertController,public imageService: CameraimageService,public alertService: AlerterrorService,public activatedRoute : ActivatedRoute , public restService: RestService) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.itemData = JSON.parse(res.value);
      this.itemName = this.itemData.data.item_name;
      this.measurement = this.itemData.data.measurement;
      this.quantity = this.itemData.data.quantity;
      this.itemPrice = this.itemData.data.price;
     this.priceRange =   this.itemData.data.price_range;
     this.categoryItemValue =   this.itemData.data.categories_id;
     this.menuImg =   this.itemData.data.item_image_url;
     this.items_id =   this.itemData.data.items_id;
    });
    this.storage.get('restaurants_id').then(restaurant_id => {
      this.resaturant_id = restaurant_id;
      console.log(this.resaturant_id);
    });
    this.addMenuform = formBuilder.group({
      categoryItemValue: ['', Validators.required],
      inputItemValue: ['', Validators.required],
      selectMeasurementValue: ['', Validators.required],
      selectQuantityValue: ['', Validators.required],
      priceRange: ['', Validators.required],
      inputPriceValue: ['', Validators.required]
    });
   }
   ionViewWillEnter(){
    var categories = JSON.stringify({
      requestType: 'all',
      
    });
    this.restService.getMenuCategories().subscribe(response => {
      this.category = JSON.parse(response['_body']);
      //this.responseCat = response;
      console.log(this.category);
      this.category = this.category.category_data;
      console.log(this.category);
    },err => {
      this.alertService.presentAlertService(err);
    });
  }
  ngOnInit() {
  }

  //Take profile picture
  async takeProfilePicture(){
    let alert = await this.alertCtrl.create({
      message: 'Upload profile picture?',
      buttons: [
        {
          text: 'Take a photo',
          handler: () => {
            this.takeImageFromCamera();
          }
        },
        {
          text: 'Get photo from gallery',
          handler: () => {
            this.getImageFromGallery();
          }
        }
      ]
    });
    alert.present();
  }
  takeImageFromCamera(){
    this.imageService.selectImageInCamera().then((imageData) => {
      this.menuImg = `data:image/png;base64,${imageData}`;
      var data = this.menuImg.split(';base64,');
      this.serverImageData = data[1];
    }).catch(err => console.error(err));
  }
  getImageFromGallery(){
    this.imageService.selectImageInGallery().then((imageData) => {
      this.menuImg = `data:image/png;base64,${imageData}`;
      var data = this.menuImg.split(';base64,');
      this.serverImageData = data[1];
    }).catch(err => console.error(err));
  }
  submitItemData(){
    if (!this.addMenuform.valid) {
      console.log('Please provide all the required values!');
      this.isSubmit = false;
      return false;
    } else {
    this.storage.get('user_accounts_id').then(user_accounts_id => {
          
          this.userId = user_accounts_id;
          var stringy = JSON.stringify({
            requestType : 'update',
            restaurantId: this.resaturant_id,
            itemName: this.itemName, 
            price: this.itemPrice,
            categoryId: this.categoryItemValue,
            measurement: this.measurement,
            quantity: this.quantity,
            itemImage: this.serverImageData,
            priceRange: this.priceRange,
            itemId: this.items_id
          });
          console.log(stringy);
          this.loader.presentLoader();
          this.restService.saveSingleItem(stringy).subscribe(response => {
            this.restaurant_data = JSON.parse(response['_body']);
            console.log(this.restaurant_data);
            this.toastservice.presentToastItemEdit();
            this.router.navigate(['/tabs/menu']); 
            this.loader.hideLoader();
          },err => {
            this.loader.hideLoader();
            this.alertService.presentAlertService(err);
          });
    });
  }
  }
}
