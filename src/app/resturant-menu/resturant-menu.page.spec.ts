import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResturantMenuPage } from './resturant-menu.page';

describe('ResturantMenuPage', () => {
  let component: ResturantMenuPage;
  let fixture: ComponentFixture<ResturantMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResturantMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
