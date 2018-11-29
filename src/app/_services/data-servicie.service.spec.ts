import { TestBed, inject } from '@angular/core/testing';

import { DataServicieService } from './data-servicie.service';

describe('DataServicieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServicieService]
    });
  });

  it('should be created', inject([DataServicieService], (service: DataServicieService) => {
    expect(service).toBeTruthy();
  }));
});
