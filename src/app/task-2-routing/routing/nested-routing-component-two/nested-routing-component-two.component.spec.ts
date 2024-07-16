import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingComponentTwoComponent } from './nested-routing-component-two.component';

describe('NestedRoutingComponentTwoComponent', () => {
  let component: NestedRoutingComponentTwoComponent;
  let fixture: ComponentFixture<NestedRoutingComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedRoutingComponentTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
