import { TestBed } from '@angular/core/testing';

import { SearchhService } from './searchh.service';

describe('SearchhService', () => {
  let service: SearchhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
