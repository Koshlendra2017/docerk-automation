import { TestBed } from '@angular/core/testing';

import { CutomPreloadingService } from './cutom-preloading.service';

describe('CutomPreloadingService', () => {
  let service: CutomPreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutomPreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
