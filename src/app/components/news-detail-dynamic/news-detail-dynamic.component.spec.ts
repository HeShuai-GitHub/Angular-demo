import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailDynamicComponent } from './news-detail-dynamic.component';

describe('NewsDetailDynamicComponent', () => {
  let component: NewsDetailDynamicComponent;
  let fixture: ComponentFixture<NewsDetailDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDetailDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
