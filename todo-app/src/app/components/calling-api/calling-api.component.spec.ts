import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingAPIComponent } from './calling-api.component';

describe('CallingAPIComponent', () => {
  let component: CallingAPIComponent;
  let fixture: ComponentFixture<CallingAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
