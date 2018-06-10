import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttouchComponent } from './contacttouch.component';

describe('ContacttouchComponent', () => {
  let component: ContacttouchComponent;
  let fixture: ComponentFixture<ContacttouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacttouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacttouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
