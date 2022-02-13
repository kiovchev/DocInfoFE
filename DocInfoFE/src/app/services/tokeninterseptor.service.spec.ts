import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './tokeninterseptor.service';

describe('TokenInterseptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
