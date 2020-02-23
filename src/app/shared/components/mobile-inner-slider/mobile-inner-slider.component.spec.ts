import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInnerSliderComponent } from './mobile-inner-slider.component';

describe('MobileInnerSliderComponent', () => {
  let component: MobileInnerSliderComponent;
  let fixture: ComponentFixture<MobileInnerSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileInnerSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileInnerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
