import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalPoojaItemComponent } from './festival-pooja-item.component';

describe('FestivalPoojaItemComponent', () => {
  let component: FestivalPoojaItemComponent;
  let fixture: ComponentFixture<FestivalPoojaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalPoojaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalPoojaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
