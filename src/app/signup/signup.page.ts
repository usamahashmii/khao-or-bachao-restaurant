import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { FirebaseauthService } from '../firebaseauth.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';
import { LoaderService } from '../loader.service';
import { AlerterrorService } from '../alerterror.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  //ngModels
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  userId: string = '';

  //name var
  characterLengthNameBool: any;//: boolean = false
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
  colorPasswordBool: any;
  validationPassword: any;

  //number var
  keyupNumberBool: any;
  characterLengthNumberBool: any;
  validationMobile: any;

  //loader bool
  loaderShow: boolean = false;
  constructor(public alertCtrl: AlertController,
    public firebaseAuthService: FirebaseauthService,
    public router: Router,
    public toastService: ToasterService,
    //public loader: LoaderService,
    public alertError: AlerterrorService,
    public restService: RestService) { }

  ngOnInit() {
  }
  
  signup(){
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
   
    //finalizing the request
    if(this.characterLengthNameBool == false &&
    this.keyupNameBool == false &&
    this.validationName == false &&
    this.keyupEmailBool == false &&
    this.validationEmail == false &&
    this.characterLengthPasswordBool == false &&
    this.validationPassword == false &&
    this.validationMobile == false &&
    this.keyupNumberBool == false
    ){
     ///
     if(this.number.length == 10){
     this.loaderShow = true;
      //this.loader.presentLoader();
     
    }else {
        this.toastService.presentToastMessage('Please enter last 10 characters of your cell number!');
      }
    }else {
      console.log('No');
    }
  }
  async presentAlertConfirm(confirmationResult) {
    const alert = await this.alertCtrl.create({
      header: 'Enter the Confirmation code!',
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { console.log('Cancel clicked'); }
        },
        { text: 'Send',
          handler: data => {
            this.loaderShow = true;
            confirmationResult.confirm(data.confirmationCode)
            .then(result => {
              // User signed in successfully.
              console.log(result.user);
              
            }).catch(error => {
              // User couldn't sign in (bad verification code?)
              this.alertError.presentAlertErrorWrongOTP();
            });
          }
        }
      ]
    });
    alert.present();
  }

  
   
  loginPage(){
    this.router.navigate(['/login']);
  }
  //validations of input fields
  //name
  nameKeyUp(){
    var regex = new RegExp(/^[A-Za-z ]+$/);
    var regexdob = new RegExp("^(?!.*[\%\/\\\&\?\,\'\;\:\!\-]{2}).*$");
    if (regex.test(this.name) && regexdob.test(this.name)) {
      if(this.name.length <= 20){
        this.characterLengthNameBool = false;
      }else {
        this.characterLengthNameBool = true;
      }
      this.keyupNameBool = false;
    }else {
      this.keyupNameBool = true;
    }
  }
  checkFocusName(){
    this.colorNameBool = true;
  }
  checkBlurName(){
    this.colorNameBool = false;
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
