import { TestBed, inject } from '@angular/core/testing';

import { PalliativeService } from './palliative.service';

describe('PalliativeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalliativeService]
    });
  });

  it('should be created', inject([PalliativeService], (service: PalliativeService) => {
    expect(service).toBeTruthy();
  }));
});
