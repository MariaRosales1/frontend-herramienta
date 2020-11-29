import { TestBed } from '@angular/core/testing';

import { OrdenesCambioService } from './ordenes-cambio.service';

describe('OrdenesCambioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenesCambioService = TestBed.get(OrdenesCambioService);
    expect(service).toBeTruthy();
  });
});
