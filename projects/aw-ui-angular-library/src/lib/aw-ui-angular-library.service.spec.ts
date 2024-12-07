import { TestBed } from '@angular/core/testing';

import { AwUiAngularLibraryService } from './aw-ui-angular-library.service';

describe('AwUiAngularLibraryService', () => {
  let service: AwUiAngularLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwUiAngularLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
