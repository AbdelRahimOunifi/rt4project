import { TestBed, inject } from '@angular/core/testing';

import { Gard1Service } from './gard1.service';

describe('Gard1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gard1Service]
    });
  });

  it('should be created', inject([Gard1Service], (service: Gard1Service) => {
    expect(service).toBeTruthy();
  }));
});
