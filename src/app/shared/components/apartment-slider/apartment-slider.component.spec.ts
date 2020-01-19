import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentSliderComponent } from './apartment-slider.component';

describe('ApartmentSliderComponent', () => {
  let component: ApartmentSliderComponent;
  let fixture: ComponentFixture<ApartmentSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
