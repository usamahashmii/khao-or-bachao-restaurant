import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CongratsAcceptedPage } from './congrats-accepted.page';

describe('CongratsAcceptedPage', () => {
  let component: CongratsAcceptedPage;
  let fixture: ComponentFixture<CongratsAcceptedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratsAcceptedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CongratsAcceptedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
