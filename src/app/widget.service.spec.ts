import { TestBed } from '@angular/core/testing';

import { widgetService } from './widget.service';

describe('widgetService', () => {
  let service: widgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(widgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
