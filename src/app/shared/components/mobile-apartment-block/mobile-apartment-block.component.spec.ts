import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApartmentBlockComponent } from './mobile-business-card.component';

describe('MobileApartmentBlockComponent', () => {
  let component: MobileApartmentBlockComponent;
  let fixture: ComponentFixture<MobileApartmentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileApartmentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileApartmentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
