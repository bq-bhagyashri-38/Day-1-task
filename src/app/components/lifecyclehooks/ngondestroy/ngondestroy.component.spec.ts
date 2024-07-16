import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgondestroyComponent } from './ngondestroy.component';

describe('NgondestroyComponent', () => {
  let component: NgondestroyComponent;
  let fixture: ComponentFixture<NgondestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgondestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgondestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
