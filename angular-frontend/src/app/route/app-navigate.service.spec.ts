import { TestBed } from '@angular/core/testing';

import { AppNavigateService } from './app-navigate.service';

describe('AppNavigateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppNavigateService = TestBed.get(AppNavigateService);
    expect(service).toBeTruthy();
  });
});
