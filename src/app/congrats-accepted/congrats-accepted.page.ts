import { Component, OnInit } from '@angular/core';

import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congrats-accepted',
  templateUrl: './congrats-accepted.page.html',
  styleUrls: ['./congrats-accepted.page.scss'],
})
export class CongratsAcceptedPage implements OnInit {
  userId: any;

  constructor(public router: Router , public menuCtrl: MenuController) { }

  ngOnInit() {
  }
}
