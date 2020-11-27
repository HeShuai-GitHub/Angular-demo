import { TestBed } from '@angular/core/testing';

import { HttpsentService } from './httpsent.service';

describe('HttpsentService', () => {
  let service: HttpsentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
