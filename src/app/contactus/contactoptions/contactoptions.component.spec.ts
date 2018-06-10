import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoptionsComponent } from './contactoptions.component';

describe('ContactoptionsComponent', () => {
  let component: ContactoptionsComponent;
  let fixture: ComponentFixture<ContactoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
