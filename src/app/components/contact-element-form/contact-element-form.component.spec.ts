import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactElementFormComponent } from './contact-element-form.component';

describe('ContactElementFormComponent', () => {
  let component: ContactElementFormComponent;
  let fixture: ComponentFixture<ContactElementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactElementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactElementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
