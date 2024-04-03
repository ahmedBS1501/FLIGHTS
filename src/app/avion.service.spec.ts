import { TestBed } from '@angular/core/testing';

import { AvionService } from './avion.service';

describe('AvionServiceService', () => {
  let service: AvionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
