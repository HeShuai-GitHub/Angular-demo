import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneDetailComponent } from './f-one-detail.component';

describe('FOneDetailComponent', () => {
  let component: FOneDetailComponent;
  let fixture: ComponentFixture<FOneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
