import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMVVMComponent } from './form-mvvm.component';

describe('FormMVVMComponent', () => {
  let component: FormMVVMComponent;
  let fixture: ComponentFixture<FormMVVMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMVVMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMVVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
