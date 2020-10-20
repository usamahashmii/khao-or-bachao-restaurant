import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../firebaseauth.service';
import { Router } from '@angular/router';
import { AlertController, NavController, MenuController } from '@ionic/angular';

import { LoaderService } from '../loader.service';
import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  name: string = '';

  userId: string = '';

  //characterLengthEmailBool: any;//: boolean = false
  keyupEmailBool: any;
  colorEmailBool: any;
  validationEmail: any;
  //password var
  characterLengthPasswordBool: any;
  colorPasswordBool: any;
  validationPassword: any;

  //loader
  loaderShow: boolean = false;
  loginData: any;

  constructor(public firebaseAuthService: FirebaseauthService,
    public router: Router,
    public alertCtrl: AlertController,
    public restService: RestService,
    public menuCtrl: MenuController,
    //public loader: LoaderService,
    public navCtrl: NavController,
    private storage: Storage,
    public alertError: AlerterrorService,
    public toastService: ToasterService
  ) {
    this.menuCtrl.enable(false);
  }
  login(){
    // check the condition for email
    if(this.email == ''){
      this.validationEmail = true;
    } 
    if(this.keyupEmailBool == true){
      this.keyupEmailBool = true;
    } 
    if(this.password == ''){
      this.validationPassword = true;
    } 
    if(this.keyupEmailBool == false &&
    this.validationEmail == false &&
    this.characterLengthPasswordBool == false &&
    this.validationPassword == false){
      //this.loader.presentLoader();
      this.loaderShow = true;
      var stringy = JSON.stringify({
        requestType : 'restaurant_login',
        email :  this.email,
        password : this.password
      });
      this.restService.authentication(stringy).subscribe(response => {
        console.log(JSON.parse(response['_body']));
        this.loginData =  JSON.parse(response['_body']);
        if(this.loginData.message =='Status Active' && this.loginData.status =='success'){
          
          //call here  
          
          this.storage.set('restaurants_id' , this.loginData.user_data.restaurants_id);
          this.storage.set('user_accounts_id' , this.loginData.user_data.user_accounts_id);
          this.storage.set('email' , this.loginData.user_data.email);
          this.storage.set('restaurant_name' , this.loginData.user_data.user_name);
          this.toastService.presentToastFirebaseLogin();
          this.loaderShow = false;
          this.email = '';
          this.password = '';
          this.menuCtrl.enable(true);
          this.navCtrl.navigateRoot('/tabs/home');
        }else if( this.loginData.status =='error'){
          this.alertError.presentAlertService(this.loginData.message);
          this.loaderShow = false;
          this.email = '';
          this.password = '';
        }else{
          this.alertError.presentAlertService(this.loginData.message);
          this.loaderShow = false;
          this.email = '';
          this.password = '';
        }
     /*   this.loaderShow = false;
        this.email = '';
        this.password = '';
        this.toastService.presentToastFirebaseLogin();
        this.router.navigate(['/tabs/home']);*/
      },err => {
        //this.loader.hideLoader();
        this.alertError.presentAlertService(err);
        this.loaderShow = false;
      });
    
    }else {
      console.log('No');
    } 
  }
  //login with facebook
 
  async resetPassword(){
    let alert = await this.alertCtrl.create({
      header: 'Enter your Email',
      message: 'A new password will be sent to you',
      inputs: [
        {
        name: 'recoverEmail',
        placeholder: 'you@example.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            //this.loader.presentLoader();
            this.loaderShow = true;
            // call user service
            var forgot = JSON.stringify({
              requestType: 'send_password',
              email: data.recoverEmail
            });
            console.log(forgot);
            this.restService.forgotPassword(forgot).subscribe(response => {
             
              this.loaderShow = false;
              this.toastService.presentToastFirebaseResetPassword();
             
            },err  => {
             
              this.loaderShow = false;
              this.alertError.presentAlertErrorPasswordReset();
            });
         }
      }
    ]
    });
    //alert.present();
  }
  signupPage(){
    this.router.navigate(['/signup']);
  }
  ngOnInit() {
  }
  //validation of email and password
  //password valid
  passwordKeyUp(){
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

}
