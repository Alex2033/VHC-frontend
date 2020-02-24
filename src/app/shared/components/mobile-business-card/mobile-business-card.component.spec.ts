import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBusinessCardComponent } from './mobile-business-card.component';

describe('MobileBusinessCardComponent', () => {
  let component: MobileBusinessCardComponent;
  let fixture: ComponentFixture<MobileBusinessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBusinessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
