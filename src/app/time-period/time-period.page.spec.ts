import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimePeriodPage } from './time-period.page';

describe('TimePeriodPage', () => {
  let component: TimePeriodPage;
  let fixture: ComponentFixture<TimePeriodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePeriodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimePeriodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
