import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboListComponent } from './robo-list.component';

describe('RoboListComponent', () => {
  let component: RoboListComponent;
  let fixture: ComponentFixture<RoboListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
