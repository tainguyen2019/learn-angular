import { ComponentFixture, TestBed } from '@angular/core/testing';
import { seedUsers } from 'src/app/services/robo.service';

import { RoboComponent } from './robo.component';

describe('RoboComponent', () => {
  let component: RoboComponent;
  let fixture: ComponentFixture<RoboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoboComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboComponent);
    component = fixture.componentInstance;
    component.robo = seedUsers[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
