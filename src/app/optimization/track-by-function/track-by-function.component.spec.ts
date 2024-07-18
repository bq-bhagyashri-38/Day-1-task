import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByFunctionComponent } from './track-by-function.component';

describe('TrackByFunctionComponent', () => {
  let component: TrackByFunctionComponent;
  let fixture: ComponentFixture<TrackByFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackByFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackByFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
