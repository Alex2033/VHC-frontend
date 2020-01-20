import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSliderComponent } from './business-slider.component';

describe('BusinessSliderComponent', () => {
  let component: BusinessSliderComponent;
  let fixture: ComponentFixture<BusinessSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
