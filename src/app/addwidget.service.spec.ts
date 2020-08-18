import { TestBed } from '@angular/core/testing';

import { AddwidgetService } from './addwidget.service';

describe('AddwidgetService', () => {
  let service: AddwidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddwidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
