/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertiryService } from './alertiry.service';

describe('Service: Alertiry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertiryService]
    });
  });

  it('should ...', inject([AlertiryService], (service: AlertiryService) => {
    expect(service).toBeTruthy();
  }));
});
