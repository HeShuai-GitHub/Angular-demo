import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDataComponent } from './rxjs-data.component';

describe('RxjsDataComponent', () => {
  let component: RxjsDataComponent;
  let fixture: ComponentFixture<RxjsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
