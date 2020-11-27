import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRouterComponent } from './c-router.component';

describe('CRouterComponent', () => {
  let component: CRouterComponent;
  let fixture: ComponentFixture<CRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
