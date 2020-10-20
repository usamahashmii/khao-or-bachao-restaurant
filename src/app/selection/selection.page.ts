import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  @ViewChild('slides', {static: false}) slides: IonSlides;
  disableSkipBtn = false;
  disablePrevBtn = true;
  disableNextBtn = false;
  disableContactBtn = true;
  disableSetupBtn = true;
  constructor() { }

  ngOnInit() {
  }
  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }
  doCheck() {
    let prom1 = this.slides.isBeginning();
    let prom2 = this.slides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = false : this.disableNextBtn = false;
      data[1] ? this.disableSkipBtn = true : this.disableSkipBtn = false;
      data[1] ? this.disableContactBtn = false : this.disableContactBtn = true;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
      data[1] ? this.disableSetupBtn = false : this.disableSetupBtn = true;
      
      // this.router.navigate(['/resturant-setup']
    });
  }
}
