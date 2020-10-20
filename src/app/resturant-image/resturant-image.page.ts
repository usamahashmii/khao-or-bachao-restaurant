import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FirebaseauthService } from '../firebaseauth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { LoaderService } from '../loader.service';
@Component({
  selector: 'app-resturant-image',
  templateUrl: './resturant-image.page.html',
  styleUrls: ['./resturant-image.page.scss'],
})
export class ResturantImagePage implements OnInit {
  paymentSetup: any;
  resturantSetup: any;
  userId: string = '';
  resturantExist: string = '';
  loaderShow: boolean = false;
  profileImage: string = '';

  //imageArray: Array<any>=[];
  imageArray: any;
  imageLength: boolean = true;

  constructor(public activatedRoute : ActivatedRoute,
    public firebaseAuthService: FirebaseauthService,
    public imageService: CameraimageService,
    public alertCtrl: AlertController,
    public router: Router) {
    
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.paymentSetup = res.paymentSetup;
      this.resturantSetup = res.resturantSetup;
      console.log(this.paymentSetup);
      console.log(this.resturantSetup);
  }); 
  }

  ngOnInit() {
  }
  submitDetail(){
    /*firebase.database().ref('resturantSetupData/' + this.userId ).set({
      resturantExist: 'Exist'
    
    }).then(()=>{
      console.log('Something Wrong');
    })*/
    this.router.navigate(['/resturant-menu'],{
      queryParams: {
         paymentSetup : this.paymentSetup,
         resturantSetup: this.resturantSetup,
         imageArray: this.imageArray
        },
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
      this.profileImage = `data:image/png;base64,${imageData}`;
      this.imageArray = this.profileImage;
      if(this.imageArray.length == 1){
        this.imageLength = false;
      }else {
        this.imageLength = true;
      }
      
      console.log(this.profileImage);
    }).catch(err => console.error(err));
  }
  getImageFromGallery(){
    this.imageService.selectImageInGallery().then((imageData) => {
      this.profileImage = `data:image/png;base64,${imageData}`;
      this.imageArray = this.profileImage;
      if(this.imageArray.length == 1){
        this.imageLength = false;
      }else {
        this.imageLength = true;
      }
    }).catch(err => console.error(err));
  }
}
