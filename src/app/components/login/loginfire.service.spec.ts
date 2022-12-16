import { TestBed } from '@angular/core/testing';

import { LoginfireService } from './loginfire.service';

describe('LoginfireService', () => {
  let service: LoginfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
