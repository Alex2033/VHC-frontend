import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApartmentCardComponent } from './mobile-apartment-card.component';

describe('MobileApartmentCardComponent', () => {
  let component: MobileApartmentCardComponent;
  let fixture: ComponentFixture<MobileApartmentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileApartmentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileApartmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
