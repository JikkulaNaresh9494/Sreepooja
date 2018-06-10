import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPoojaItemComponent } from './special-pooja-item.component';

describe('SpecialPoojaItemComponent', () => {
  let component: SpecialPoojaItemComponent;
  let fixture: ComponentFixture<SpecialPoojaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPoojaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPoojaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
