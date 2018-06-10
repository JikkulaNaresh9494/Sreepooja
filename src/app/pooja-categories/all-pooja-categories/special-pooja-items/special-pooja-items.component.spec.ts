import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPoojaItemsComponent } from './special-pooja-items.component';

describe('SpecialPoojaItemsComponent', () => {
  let component: SpecialPoojaItemsComponent;
  let fixture: ComponentFixture<SpecialPoojaItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPoojaItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPoojaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
