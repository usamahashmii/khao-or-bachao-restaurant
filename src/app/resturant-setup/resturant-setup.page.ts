import { Component, OnInit ,Injectable  } from '@angular/core';
import { ResturantPaymentPage } from '../resturant-payment/resturant-payment.page';
import { Routes, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resturant-setup',
  templateUrl: './resturant-setup.page.html',
  styleUrls: ['./resturant-setup.page.scss'],
})
@Injectable()
export class ResturantSetupPage implements OnInit { 
  public resturantForm: FormGroup;
  isSubmit:Boolean = true;
  resturantName: string = '';
  Branch: string = '';
  resturantLocation: string = '';
  resturantNumber: string = '';

  mondayDate1: string = '';
  mondayDate2: string = '';
  tuesdayDate1: string = '';
  tuesdayDate2: string = '';
  wednesdayDate1: string = '';
  wednesdayDate2: string = '';
  thursdayDate1: string = '';
  thursdayDate2: string = '';
  fridayDate1: string = '';
  fridayDate2: string = '';
  constructor(public router: Router,public navCtrl: NavController , public formBuilder: FormBuilder) {

    this.resturantForm = formBuilder.group({
      resturantName: ['', [Validators.required, Validators.minLength(2)]],
      Branch: ['', [Validators.required, Validators.minLength(2)]],
      resturantLocation: ['', [Validators.required, Validators.minLength(2)]],
      resturantNumber: ['', [Validators.required, Validators.minLength(2)]],
      mondayDate1: ['', Validators.required],
      mondayDate2: ['', Validators.required],
      tuesdayDate1: ['', Validators.required],
      tuesdayDate2: ['', Validators.required],
      wednesdayDate1: ['', Validators.required],
      wednesdayDate2: ['', Validators.required],
      thursdayDate1: ['', Validators.required],
      thursdayDate2: ['', Validators.required],
      fridayDate1: ['', Validators.required],
      fridayDate2: ['', Validators.required]
    });

   }

  ngOnInit() {
  }
  OpenPayment(){
    if (!this.resturantForm.valid) {
      console.log('Please provide all the required values!');
      this.isSubmit = false;
      return false;
    } else {
      var ex = this.mondayDate1.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.mondayDate1 =  ex1[0];


      var ex = this.mondayDate2.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.mondayDate2 =  ex1[0];

      var ex = this.tuesdayDate1.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.tuesdayDate1 =  ex1[0];

      var ex = this.tuesdayDate2.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.tuesdayDate2 =  ex1[0];

      var ex = this.wednesdayDate1.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.wednesdayDate1 =  ex1[0];

      var ex = this.wednesdayDate2.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.wednesdayDate2 =  ex1[0];

      var ex = this.thursdayDate1.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.thursdayDate1 =  ex1[0];

      var ex = this.thursdayDate2.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.thursdayDate2 =  ex1[0];

      var ex = this.fridayDate1.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.fridayDate1 =  ex1[0];

      var ex = this.fridayDate2.split( 'T',5 )[1];
      var ex1 = ex.split( '.');
      this.fridayDate2 =  ex1[0];

      var myData = JSON.stringify({
        resturantName: this.resturantName,
        Branch: this.Branch,
        resturantLocation: this.resturantLocation,
        resturantNumber: this.resturantNumber,
        mondayDate1: this.mondayDate1,
        mondayDate2: this.mondayDate2,
        tuesdayDate1: this.tuesdayDate1,
        tuesdayDate2: this.tuesdayDate2,
        wednesdayDate1:this.wednesdayDate1,
        wednesdayDate2:this.wednesdayDate2,
        thursdayDate1: this.thursdayDate1,
        thursdayDate2:this.thursdayDate2,
        fridayDate1: this.fridayDate1,
        fridayDate2: this.fridayDate2
        
      });
     
      console.log(myData);
      this.router.navigate(['/resturant-payment'],{
        queryParams: {
           value : myData
          },
        });
    }
   

  }
}
