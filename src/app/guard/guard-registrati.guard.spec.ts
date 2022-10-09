import { TestBed } from '@angular/core/testing';

import { GuardRegistratiGuard } from './guard-registrati.guard';

describe('GuardRegistratiGuard', () => {
  let guard: GuardRegistratiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardRegistratiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
