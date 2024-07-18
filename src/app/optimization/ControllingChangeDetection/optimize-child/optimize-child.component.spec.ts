import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizeChildComponent } from './optimize-child.component';

describe('OptimizeChildComponent', () => {
  let component: OptimizeChildComponent;
  let fixture: ComponentFixture<OptimizeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizeChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
