import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectTab = 'tab1';
  
  constructor() {}
  ngOnInit(){
   
  
  }
 
  tabChange(e) {
    this.selectTab = e.tab;
}
}
