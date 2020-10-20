import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDayDiscountPage } from './edit-day-discount.page';

describe('EditDayDiscountPage', () => {
  let component: EditDayDiscountPage;
  let fixture: ComponentFixture<EditDayDiscountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDayDiscountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDayDiscountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
