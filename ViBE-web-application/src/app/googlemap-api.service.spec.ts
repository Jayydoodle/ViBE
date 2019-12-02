import { TestBed } from '@angular/core/testing';

import { GooglemapApiService } from './googlemap-api.service';

describe('GooglemapApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglemapApiService = TestBed.get(GooglemapApiService);
    expect(service).toBeTruthy();
  });
});
