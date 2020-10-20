import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResturantImagePage } from './resturant-image.page';

describe('ResturantImagePage', () => {
  let component: ResturantImagePage;
  let fixture: ComponentFixture<ResturantImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResturantImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
