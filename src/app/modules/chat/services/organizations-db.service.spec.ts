import { TestBed } from '@angular/core/testing';

import { OrganizationsDbService } from './organizations-db.service';

describe('OrganizationsDbService', () => {
  let service: OrganizationsDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationsDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
