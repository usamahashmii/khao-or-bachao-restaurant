import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegionalManagerPage } from './regional-manager.page';

describe('RegionalManagerPage', () => {
  let component: RegionalManagerPage;
  let fixture: ComponentFixture<RegionalManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionalManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
