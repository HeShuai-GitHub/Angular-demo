import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COneDetailComponent } from './c-one-detail.component';

describe('COneDetailComponent', () => {
  let component: COneDetailComponent;
  let fixture: ComponentFixture<COneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COneDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
