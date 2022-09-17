/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniqueIdService } from './unique-id.service';

describe('Service: UniqueId', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniqueIdService]
    });
  });

  it('should ...', inject([UniqueIdService], (service: UniqueIdService) => {
    expect(service).toBeTruthy();
  }));
});
