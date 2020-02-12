import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSpaceRequestComponent } from './business-space-request.component';

describe('BusinessSpaceRequestComponent', () => {
  let component: BusinessSpaceRequestComponent;
  let fixture: ComponentFixture<BusinessSpaceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessSpaceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSpaceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
