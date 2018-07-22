import { TestBed, inject } from '@angular/core/testing';

import { DustDBService } from './dustdb.service';

describe('DustDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DustDBService]
    });
  });

  it('should be created', inject([DustDBService], (service: DustDBService) => {
    expect(service).toBeTruthy();
  }));
});
