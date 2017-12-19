import { TestBed, inject } from '@angular/core/testing';

import { FavorieService } from './favorie.service';

describe('FavorieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavorieService]
    });
  });

  it('should be created', inject([FavorieService], (service: FavorieService) => {
    expect(service).toBeTruthy();
  }));
});
