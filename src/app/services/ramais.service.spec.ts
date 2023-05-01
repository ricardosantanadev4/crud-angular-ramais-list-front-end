import { TestBed } from '@angular/core/testing';

import { RamaisListService } from './ramais-list.service';

describe('RamaisListService', () => {
  let service: RamaisListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamaisListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
