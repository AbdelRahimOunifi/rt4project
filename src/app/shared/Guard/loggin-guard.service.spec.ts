import { TestBed, inject } from '@angular/core/testing';

import { LogginGuardService } from './loggin-guard.service';

describe('LogginGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogginGuardService]
    });
  });

  it('should be created', inject([LogginGuardService], (service: LogginGuardService) => {
    expect(service).toBeTruthy();
  }));
});
