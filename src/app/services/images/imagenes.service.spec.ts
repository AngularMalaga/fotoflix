import { TestBed, inject } from '@angular/core/testing';

import { PFImageService } from './imagenes.service';

describe('ImagenesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PFImageService]
    });
  });

  it('should be created', inject([PFImageService], (service: PFImageService) => {
    expect(service).toBeTruthy();
  }));
});
