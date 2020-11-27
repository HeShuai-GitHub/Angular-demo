import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FRouterComponent } from './f-router.component';

describe('FRouterComponent', () => {
  let component: FRouterComponent;
  let fixture: ComponentFixture<FRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
