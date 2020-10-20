import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { LoaderService } from '../loader.service';
import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { MenuController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraimageService } from '../cameraimage.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.page.html',
  styleUrls: ['./resturant-menu.page.scss'],
})
export class ResturantMenuPage implements OnInit {
  
  public addMenuform: FormGroup;
  isSubmit:Boolean = true;
  itemName: string = '';
  measurement: string = '';
  quantity: string = '';
  itemPrice: string = '';

  inputArray: { id: string, categoryItemValue: string , selectMeasurementValue: string,
    selectQuantityValue: string , inputPriceValue: string  , inputItemValue: string}[] = [];
  inputObj: { id: string, categoryItemValue: string , selectMeasurementValue: string,
    selectQuantityValue: string , inputPriceValue: string , inputItemValue: string };


  inputArrayBool: boolean = true;

  paymentSetup: any;
  resturantSetup: any;
  imageArray: any;
  userId: string = '';
  restaurant_data: any;
  category: any;
  resaturant_id: any;

  responseCat: any;

  categoryItemValue:any;
  inputItemValue:any;
  selectMeasurementValue:any;
  selectQuantityValue:any;
  inputPriceValue:any;
  menuImg: string;
  priceRange:any;
  serverImageData: string;
  restaurantName: any;
  constructor(public activatedRoute: ActivatedRoute,
    public restService: RestService,
    public loader: LoaderService,
    public alertService: AlerterrorService,
    public toastService: ToasterService,
    public menuCtrl: MenuController,
    private storage: Storage,
    public alertCtrl: AlertController,
    public imageService: CameraimageService,
    public formBuilder: FormBuilder,
    public router: Router) {
   //addSingleitem
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
      console.log(response);
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
    this.storage.get('restaurant_name').then(restaurant_name => {
      this.restaurantName = restaurant_name;
    });
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.paymentSetup = res.paymentSetup;
      this.resturantSetup = res.resturantSetup;
      this.imageArray = res.imageArray;
      console.log(this.resturantSetup);
     
  });
  
  var categories = JSON.stringify({
    requestType: 'all',
    
  });
  this.restService.getMenuCategories().subscribe(response => {
    console.log(response);
    this.category = JSON.parse(response['_body']);
    //this.responseCat = response;
    console.log(this.category);
    this.category = this.category.category_data;
    console.log(this.category);
  },err => {
    this.alertService.presentAlertService(err);
  });
  
   
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
            requestType : 'add',
            restaurantId: this.resaturant_id,
            itemName: this.inputItemValue, 
            price: this.inputPriceValue,
            categoryId: this.categoryItemValue,
            measurement: this.selectMeasurementValue,
            quantity: this.selectQuantityValue,
            itemImage: this.serverImageData,
            priceRange: this.priceRange
          });
          console.log(stringy);
          this.loader.presentLoader();
          this.restService.saveSingleItem(stringy).subscribe(response => {
            this.restaurant_data = JSON.parse(response['_body']);
            console.log(this.restaurant_data);
            

            this.menuImg = '';
            this.categoryItemValue = '';
            this.inputItemValue = '';
            this.selectMeasurementValue = '';
            this.selectQuantityValue = '';
            this.priceRange = '';
            this.inputPriceValue='';
            this.toastService.presentToastItemAdd();
            this.router.navigate(['/tabs/menu']); 
            this.loader.hideLoader();
          },err => {
            this.loader.hideLoader();
            this.alertService.presentAlertService(err);
          });
    });
  }
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
