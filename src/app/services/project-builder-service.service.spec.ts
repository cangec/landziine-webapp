import { TestBed, inject } from '@angular/core/testing';

import { ProjectBuilderServiceService } from './project-builder-service.service';

describe('ProjectBuilderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectBuilderServiceService]
    });
  });

  it('should be created', inject([ProjectBuilderServiceService], (service: ProjectBuilderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
