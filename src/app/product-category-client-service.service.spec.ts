import { TestBed } from '@angular/core/testing';

import { ProductCategoryClientServiceService } from './product-category-client-service.service';

describe('ProductCategoryClientServiceService', () => {
  let service: ProductCategoryClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoryClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
