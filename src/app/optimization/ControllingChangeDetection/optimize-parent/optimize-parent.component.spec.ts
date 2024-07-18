import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizeParentComponent } from './optimize-parent.component';

describe('OptimizeParentComponent', () => {
  let component: OptimizeParentComponent;
  let fixture: ComponentFixture<OptimizeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizeParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
