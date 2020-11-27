import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCRouterComponent } from './f-c-router.component';

describe('FCRouterComponent', () => {
  let component: FCRouterComponent;
  let fixture: ComponentFixture<FCRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FCRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
