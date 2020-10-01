import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RoboService } from './robo.service';

describe('RoboService', () => {
  let service: RoboService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RoboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
