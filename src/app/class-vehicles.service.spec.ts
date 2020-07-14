import { TestBed } from '@angular/core/testing';

import { ClassVehiclesService } from './class-vehicles.service';

describe('ClassVehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassVehiclesService = TestBed.get(ClassVehiclesService);
    expect(service).toBeTruthy();
  });
});
