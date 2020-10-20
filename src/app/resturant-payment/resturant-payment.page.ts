import { Component, OnInit ,Injectable  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ResturantImagePage } from '../resturant-image/resturant-image.page';
@Component({
  selector: 'app-resturant-payment',
  templateUrl: './resturant-payment.page.html',
  styleUrls: ['./resturant-payment.page.scss'],
})
@Injectable()
export class ResturantPaymentPage implements OnInit {
  public paymentForm: FormGroup;
  isSubmit:Boolean = true;
  resturantDetail: string = '';
  terms: string = '';
  pMethod: string = '';
  recommended: string = '';
  constructor(public activatedRoute : ActivatedRoute,public router: Router,public navCtrl: NavController , public formBuilder: FormBuilder) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      
      console.log(JSON.parse(res.value));
      this.resturantDetail = res.value;
      
  }); 
  this.paymentForm = formBuilder.group({
    terms: ['', Validators.required],
    pMethod: ['', Validators.required],
    recommended: ['', Validators.required]
  }); 
   }

  ngOnInit() {
  }
  openImagePage(){
    if (!this.paymentForm.valid) {
      console.log('Please provide all the required values!');
      this.isSubmit = false;
      return false;
    } else {
      var myData = JSON.stringify({
        terms: this.terms,
        pMethod: this.pMethod,
        recommended: this.recommended
      });
      console.log(myData);
      this.router.navigate(['/resturant-image'],{
        queryParams: {
           paymentSetup : myData,
           resturantSetup: this.resturantDetail
          },
        });
    }
   
  }
}
