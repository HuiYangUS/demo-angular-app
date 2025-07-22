import { TestBed } from '@angular/core/testing';
import { DataBankService } from './data-bank.service';

describe('DataBankService', () => {
  let service: DataBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
