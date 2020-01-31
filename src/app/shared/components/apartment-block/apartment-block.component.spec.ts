import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentBlockComponent } from './apartment-block.component';

describe('ApartmentBlockComponent', () => {
  let component: ApartmentBlockComponent;
  let fixture: ComponentFixture<ApartmentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
