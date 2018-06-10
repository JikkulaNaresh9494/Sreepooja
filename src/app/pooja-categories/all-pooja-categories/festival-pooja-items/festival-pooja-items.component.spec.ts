import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalPoojaItemsComponent } from './festival-pooja-items.component';

describe('FestivalPoojaItemsComponent', () => {
  let component: FestivalPoojaItemsComponent;
  let fixture: ComponentFixture<FestivalPoojaItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalPoojaItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalPoojaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
