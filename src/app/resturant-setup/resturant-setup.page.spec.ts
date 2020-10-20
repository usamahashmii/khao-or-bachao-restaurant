import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResturantSetupPage } from './resturant-setup.page';

describe('ResturantSetupPage', () => {
  let component: ResturantSetupPage;
  let fixture: ComponentFixture<ResturantSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResturantSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
