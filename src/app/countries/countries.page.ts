import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';

import { AlerterrorService } from '../alerterror.service';
import { ToasterService } from '../toaster.service';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  userId: string = '';
  
  loaderShow: boolean = false;

  showPakCities: boolean = false;
  showSaCities: boolean = false;
  showSkCities: boolean = false;
  showSweCities: boolean = false;
  showHunCities: boolean = false;
  showMexCities: boolean = false;
  showIndCities: boolean = false;
  
  constructor(public menuCtrl: MenuController,
    public alertCtrl: AlerterrorService,
    public toastCtrl: ToasterService,
    public storage: Storage,
    public router: Router,
    public restService: RestService) { }

  ngOnInit() {
  }
  openCity(val: any){
    if(val == 'pak'){
      if(this.showPakCities){
        this.showPakCities = false;
      }else{
        this.showPakCities = true;
      }
    }else if(val == 'sa'){
      if(this.showSaCities){
        this.showSaCities = false;
      }else{
        this.showSaCities = true;
      }
    }else if(val == 'sk'){
      if(this.showSkCities){
        this.showSkCities = false;
      }else{
        this.showSkCities = true;
      }
    }else if(val == 'swe'){
      if(this.showSweCities){
        this.showSweCities = false;
      }else{
        this.showSweCities = true;
      }
    }else if(val == 'hun'){
      if(this.showHunCities){
        this.showHunCities = false;
      }else{
        this.showHunCities = true;
      }
    }else if(val == 'mex'){
      if(this.showMexCities){
        this.showMexCities = false;
      }else{
        this.showMexCities = true;
      }
    }else if(val == 'ind'){
      if(this.showIndCities){
        this.showIndCities = false;
      }else{
        this.showIndCities = true;
      }
    }
  }
  openSideMenu(){
    this.menuCtrl.toggle();
  }
}
