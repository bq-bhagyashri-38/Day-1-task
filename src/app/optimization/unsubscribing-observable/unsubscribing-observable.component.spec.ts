import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribingObservableComponent } from './unsubscribing-observable.component';

describe('UnsubscribingObservableComponent', () => {
  let component: UnsubscribingObservableComponent;
  let fixture: ComponentFixture<UnsubscribingObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsubscribingObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
