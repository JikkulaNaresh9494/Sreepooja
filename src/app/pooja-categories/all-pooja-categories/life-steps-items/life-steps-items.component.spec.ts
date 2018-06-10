import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStepsItemsComponent } from './life-steps-items.component';

describe('LifeStepsItemsComponent', () => {
  let component: LifeStepsItemsComponent;
  let fixture: ComponentFixture<LifeStepsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeStepsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeStepsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
