import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlocationComponent } from './contactlocation.component';

describe('ContactlocationComponent', () => {
  let component: ContactlocationComponent;
  let fixture: ComponentFixture<ContactlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
