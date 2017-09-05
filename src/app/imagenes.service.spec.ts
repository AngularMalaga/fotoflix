import { TestBed, inject } from '@angular/core/testing';

import { ImagenesService } from './imagenes.service';

describe('ImagenesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagenesService]
    });
  });

  it('should be created', inject([ImagenesService], (service: ImagenesService) => {
    expect(service).toBeTruthy();
  }));
});
