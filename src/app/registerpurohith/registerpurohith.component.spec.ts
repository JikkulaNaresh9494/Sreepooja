import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpurohithComponent } from './registerpurohith.component';

describe('RegisterpurohithComponent', () => {
  let component: RegisterpurohithComponent;
  let fixture: ComponentFixture<RegisterpurohithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterpurohithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpurohithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
