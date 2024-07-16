import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingComponentOneComponent } from './nested-routing-component-one.component';

describe('NestedRoutingComponentOneComponent', () => {
  let component: NestedRoutingComponentOneComponent;
  let fixture: ComponentFixture<NestedRoutingComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedRoutingComponentOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
