import { TestBed, inject } from '@angular/core/testing';

import { QuesBankService } from './ques-bank.service';

describe('QuesBankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuesBankService]
    });
  });

  it('should be created', inject([QuesBankService], (service: QuesBankService) => {
    expect(service).toBeTruthy();
  }));
});
