import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingGuardComponent } from './routing-guard.component';

describe('RoutingGuardComponent', () => {
  let component: RoutingGuardComponent;
  let fixture: ComponentFixture<RoutingGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
