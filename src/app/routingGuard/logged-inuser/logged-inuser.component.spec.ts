import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInuserComponent } from './logged-inuser.component';

describe('LoggedInuserComponent', () => {
  let component: LoggedInuserComponent;
  let fixture: ComponentFixture<LoggedInuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedInuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
