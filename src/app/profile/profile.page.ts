import { Component, OnInit } from '@angular/core';

import { FirebaseauthService } from '../firebaseauth.service';
import { Router } from '@angular/router';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { LoaderService } from '../loader.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userId: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  number: string = '';

  profileImage: string = '';

  showPasswordInput: boolean = false;

  //name var
  characterLengthNameBool: any;
  keyupNameBool: any;
  colorNameBool: any;
  validationName: any;
  //email var
  //characterLengthEmailBool: any;
  keyupEmailBool: any;
  colorEmailBool: any;
  validationEmail: any;
  //password var
  characterLengthPasswordBool: any;
  colorPasswordBool: any
  validationPassword: any;

  //number var
  keyupNumberBool: any;
  characterLengthNumberBool: any;
  validationMobile: any;
  
  //loader show bool
  loaderShow: boolean = false;
  user_data: any;
  city: any;
  url: any;

  constructor(public firebase: FirebaseauthService,
    public router: Router,
    public alertCtrl: AlertController,
    public imageService: CameraimageService,
    public alertError: AlerterrorService,
    public toastService: ToasterService,
    //public loader: LoaderService,
    public storage:Storage,
    public restService: RestService) { }

  ngOnInit() {
    console.log('ionViewDidLoad ProfilePage');
    this.storage.get('user_accounts_id').then(user_accounts_id => {
      console.log(user_accounts_id); 
      this.userId = user_accounts_id;
      var stringy = JSON.stringify({
        userId : user_accounts_id,
      });
      this.restService.getUserData(stringy).subscribe(response => {
        this.user_data = JSON.parse(response['_body']);
        this.name  = this.user_data.user_data.user_name;
        this.city  = this.user_data.user_data.city;
        this.email  = this.user_data.user_data.email;
        this.number  = this.user_data.user_data.mobile;
        this.password  = this.user_data.user_data.password;
        this.profileImage= "https://dev.khaoaurbachao.com/image.php?image=assets/admin/images/restaurants_images/"+this.profileImage+"&height=100px&width=100px&zc=1&ct=0";
      },err => {
        //this.loader.hideLoader();
        this.alertError.presentAlertService(err);
      });
      
     });
    //check if user is already logged in
  /*  this.userId = firebase.auth().currentUser.uid;
    console.log(firebase.auth().currentUser);
    if(firebase.auth().currentUser){
      if (firebase.auth().currentUser.providerData[0].providerId == 'password') {
        console.log('login with normal');
        this.showPasswordInput = true;
      }else if(firebase.auth().currentUser.providerData[0].providerId == 'facebook.com'){
        console.log('login with Facebook');
        this.showPasswordInput = false;
      }
    }
  
    //this.loader.presentLoader();
    this.loaderShow = true;
    console.log(this.userId);
    firebase.database().ref('userSignData/' + this.userId).once("value" , snapshot => {
      //this.loader.hideLoader();
      
      this.loaderShow = false;
      if(snapshot.val()){
        this.characterLengthNameBool = false;
        this.keyupNameBool = false;
        this.validationName = false;
        this.keyupEmailBool = false;
        this.validationEmail = false;
        this.characterLengthPasswordBool = false;
        this.validationPassword = false;
        this.validationMobile = false;
        this.keyupNumberBool = false; 

        this.name = snapshot.val().name;
        this.email = snapshot.val().email;
        //making a check to avoid undefined value
        if(snapshot.val().number){
          this.number = snapshot.val().number;
        }else {
          this.number = '';
        }
        if(snapshot.val().profileImage){
          this.profileImage = snapshot.val().profileImage;
        }else {
          this.profileImage = '';
        }
      }else {
        console.log('No data');
      }
    }).catch(err => {
      this.loaderShow = false;
        //this.alertError.presentAlertAuth(err);
    }); */
  }
  //update data
  update(){
    //check the condition for name
    if(this.name == ''){
      this.validationName = true;
    } 
    if(this.keyupNameBool == true){
      this.keyupNameBool = true;
    } 
    if(this.name.length > 12){
      this.characterLengthNameBool = true;
    }
    // check the condition for email
    if(this.email == ''){
      this.validationEmail = true;
    } 
    if(this.keyupEmailBool == true){
      this.keyupEmailBool = true;
    } 
    /*if(this.email.length > 25){
      this.characterLengthEmailBool = true;
    }*/
    // check the condition for password
    if(this.password == ''){
      this.validationPassword = true;
    } 
    // check the condition for re password
    if(this.number == ''){
      this.validationMobile = true;
    }
    if(this.keyupNumberBool == true){
      this.keyupNumberBool = true;
    }
   
    console.log(
      this.characterLengthNameBool ,
    this.keyupNameBool  ,
    this.validationName  ,
    this.keyupEmailBool  ,
    this.characterLengthPasswordBool  ,
    this.validationPassword ,
    this.validationMobile ,
    this.keyupNumberBool 
    )
    //finalizing the request
    if(this.characterLengthNameBool == false &&
    this.keyupNameBool == false &&
    this.validationName == false &&
    this.keyupEmailBool == false &&
    this.characterLengthPasswordBool == false &&
    this.validationPassword == false &&
    this.validationMobile == false &&
    this.keyupNumberBool == false
    ){
      //updating data in firebase
      //this.loader.presentLoader();
      this.loaderShow = true;

      var stringy = JSON.stringify({
        userId: this.userId,
        email :  this.email,
        name : this.name,
        number: this.number,
        password: this.password,
      });
      this.restService.updateProfileData(stringy).subscribe(response => {
        console.log(JSON.parse(response['_body']));
        this.loaderShow = false;
  
      },err => {
        //this.loader.hideLoader();
        this.alertError.presentAlertService(err);
      });
    /*  this.firebase.updatePasswordEmail(this.password , this.email , this.showPasswordInput).then(data => {
        this.firebase.updateProfileData(this.userId , this.name , this.email , this.number , this.profileImage).then(data => {
          //this.loader.hideLoader();
          ////check if user is logged in
          var stringy = JSON.stringify({
            userId: this.userId,
            name: this.name,
            number: this.number,
            email: this.email,
            profilePicture: this.profileImage
          });
          //updating data on server
          
          this.restService.updateUserData(stringy).subscribe(response => {
            console.log(response);
            //this.loader.hideLoader();
            this.loaderShow = false;
            this.toastService.presentToastFirebaseUpdateData();
          } , err => {
            
            this.alertError.presentAlertService(err);
          });
          
        }).catch(err => {
           //this.loader.hideLoader();
           this.loaderShow = false;
          this.alertError.presentAlertAuth(err);
        });
      }).catch(err => {
        //this.loader.hideLoader();
        this.loaderShow = false;
        this.alertError.presentAlertAuth(err);
      });
      */
    }else {
      console.log('No');
    }
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
      console.log(this.profileImage);
      this.updateImage(this.profileImage);
    }).catch(err => console.error(err));
  }
  getImageFromGallery(){
    this.imageService.selectImageInGallery().then((imageData) => {
      this.profileImage = `data:image/png;base64,${imageData}`;
      this.updateImage(this.profileImage);
    }).catch(err => console.error(err));
  }
  updateImage(image){
    var stringy = JSON.stringify({
      userId: this.userId,
      profileImage :  image
    });
    this.restService.updateProfileData(stringy).subscribe(response => {
      console.log(JSON.parse(response['_body']));
      this.loaderShow = false;

    },err => {
      //this.loader.hideLoader();
      this.alertError.presentAlertService(err);
    });
  }
  //logout profile
  logout(){
    var users_null=null;
    //check if user is logged in
    this.storage.set('restaurants_id' , users_null);
    this.storage.set('user_accounts_id' , users_null);
    this.storage.set('email' , users_null);
    this.toastService.presentToastFirebaseLogout();
    this.router.navigate(['/login']);
  }
  //validations of fields
  //validations of input fields
  //name
  nameKeyUp(){
    console.log('sd');
    var regex = new RegExp(/^[A-Za-z ]+$/);
    var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");
    if (regex.test(this.name) && regexdob.test(this.name)) {
      console.log('sd');
      if(this.name.length <= 30){
        this.characterLengthNameBool = false;
      }else {
        this.characterLengthNameBool = true;
      }
      this.keyupNameBool = false;
    }else {
      console.log('sd');
      this.keyupNameBool = true;
    }
  }
  checkFocusName(){
    this.colorNameBool = true;
  }
  checkBlurName(){
    this.colorNameBool = false;
    console.log('blur name');
    if(this.name != ''){
      this.validationName = false;
    }else {
      this.validationName = true;
    }
  }
   test = '';
  
   //password valid
   passwordKeyUp(){
     console.log(this.password.length);
    if(this.password.length <= 5){
      this.characterLengthPasswordBool = true;
    }else {
      this.characterLengthPasswordBool = false;
    }
  }
  checkFocusPassword(){
    this.colorPasswordBool = true;
  }
  checkBlurPassword(){
    this.colorPasswordBool = false;
    if(this.password != ''){
      this.validationPassword = false;
    }else {
      this.validationPassword = true;
    }
  }
  //email valid
  emailKeyUp(){
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");
    if (expression.test(this.email) && regexdob.test(this.email)) {
      /*if(this.email.length <= 25){
        this.characterLengthEmailBool = false;
      }else {
        this.characterLengthEmailBool = true;
      }*/
      this.keyupEmailBool = false;
    }else {
      console.log('Invalid');
      this.keyupEmailBool = true;
    }
  }
  checkFocusEmail(){
    this.colorEmailBool = true;
  }
  checkBlurEmail(){
    this.colorEmailBool = false;
    if(this.email != ''){
      this.validationEmail = false;
    }else {
      this.validationEmail = true;
    }
    if(this.email != '' && !this.validationEmail && !this.keyupEmailBool){
      //check the email from server that if that email exists or not
    }
  }
  // for cell number
  checkFocusMobile(){
  }
  checkBlurMobile(){
    if(this.number != ''){
      this.validationMobile = false;
    }else {
      this.validationMobile = true;
    }
  }
  numberKeyUp(){
    var regex = new RegExp("^[0-9]*$");
    var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");
    if (regex.test(this.number) && regexdob.test(this.number)) {
      if(this.number.length <= 10){
        this.characterLengthNumberBool = false;
      }else {
        console.log('Mobile Number is too long');
        this.characterLengthNumberBool = true;
      }
      console.log('Ok');
      this.keyupNumberBool = false;
    }else {
      console.log('Invalid');
      this.keyupNumberBool = true;
    }
  }
}
