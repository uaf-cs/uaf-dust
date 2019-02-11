import { TestBed } from '@angular/core/testing';

import { SplashscreenService } from './splashscreen.service';

describe('SplashscreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplashscreenService = TestBed.get(SplashscreenService);
    expect(service).toBeTruthy();
  });
});
