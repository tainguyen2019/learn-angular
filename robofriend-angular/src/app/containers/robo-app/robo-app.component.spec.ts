import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RoboFilterComponent } from 'src/app/components/robo-filter/robo-filter.component';
import { RoboListComponent } from 'src/app/components/robo-list/robo-list.component';
import { RoboComponent } from 'src/app/components/robo/robo.component';

import { RoboService } from 'src/app/services/robo.service';
import { RoboAppComponent } from './robo-app.component';

describe('RoboAppComponent', () => {
  let component: RoboAppComponent;
  let fixture: ComponentFixture<RoboAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RoboAppComponent,
        RoboListComponent,
        RoboComponent,
        RoboFilterComponent,
      ],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [RoboService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
