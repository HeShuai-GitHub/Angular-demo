import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTwoDetailComponent } from './c-two-detail.component';

describe('CTwoDetailComponent', () => {
  let component: CTwoDetailComponent;
  let fixture: ComponentFixture<CTwoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTwoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTwoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
