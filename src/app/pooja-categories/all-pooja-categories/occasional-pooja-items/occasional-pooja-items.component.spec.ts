import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionalPoojaItemsComponent } from './occasional-pooja-items.component';

describe('OccasionalPoojaItemsComponent', () => {
  let component: OccasionalPoojaItemsComponent;
  let fixture: ComponentFixture<OccasionalPoojaItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccasionalPoojaItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionalPoojaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
