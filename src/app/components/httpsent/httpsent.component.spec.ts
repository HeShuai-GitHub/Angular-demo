import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsentComponent } from './httpsent.component';

describe('HttpsentComponent', () => {
  let component: HttpsentComponent;
  let fixture: ComponentFixture<HttpsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
