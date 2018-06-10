import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactimageComponent } from './contactimage.component';

describe('ContactimageComponent', () => {
  let component: ContactimageComponent;
  let fixture: ComponentFixture<ContactimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
