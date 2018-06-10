import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStepsItemComponent } from './life-steps-item.component';

describe('LifeStepsItemComponent', () => {
  let component: LifeStepsItemComponent;
  let fixture: ComponentFixture<LifeStepsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeStepsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeStepsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
