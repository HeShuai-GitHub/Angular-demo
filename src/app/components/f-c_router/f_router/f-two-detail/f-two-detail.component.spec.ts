import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTwoDetailComponent } from './f-two-detail.component';

describe('FTwoDetailComponent', () => {
  let component: FTwoDetailComponent;
  let fixture: ComponentFixture<FTwoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTwoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTwoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
