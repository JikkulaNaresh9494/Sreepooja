import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionalPoojaItemComponent } from './occasional-pooja-item.component';

describe('OccasionalPoojaItemComponent', () => {
  let component: OccasionalPoojaItemComponent;
  let fixture: ComponentFixture<OccasionalPoojaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccasionalPoojaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionalPoojaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
