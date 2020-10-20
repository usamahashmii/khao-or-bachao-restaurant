import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertConfirmPage } from './alert-confirm.page';

describe('AlertConfirmPage', () => {
  let component: AlertConfirmPage;
  let fixture: ComponentFixture<AlertConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
