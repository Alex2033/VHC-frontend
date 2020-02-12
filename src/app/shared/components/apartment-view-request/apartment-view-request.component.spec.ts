import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentViewRequestComponent } from './apartment-view-request.component';

describe('ApartmentViewRequestComponent', () => {
  let component: ApartmentViewRequestComponent;
  let fixture: ComponentFixture<ApartmentViewRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentViewRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
