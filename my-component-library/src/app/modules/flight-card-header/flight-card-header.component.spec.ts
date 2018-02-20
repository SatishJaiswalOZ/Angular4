import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardHeaderComponent } from './flight-card-header.component';

describe('FlightCardHeaderComponent', () => {
  let component: FlightCardHeaderComponent;
  let fixture: ComponentFixture<FlightCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
