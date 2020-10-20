import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseItemPage } from './choose-item.page';

describe('ChooseItemPage', () => {
  let component: ChooseItemPage;
  let fixture: ComponentFixture<ChooseItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
