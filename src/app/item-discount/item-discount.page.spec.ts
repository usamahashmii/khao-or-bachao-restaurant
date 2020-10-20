import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemDiscountPage } from './item-discount.page';

describe('ItemDiscountPage', () => {
  let component: ItemDiscountPage;
  let fixture: ComponentFixture<ItemDiscountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDiscountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDiscountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
