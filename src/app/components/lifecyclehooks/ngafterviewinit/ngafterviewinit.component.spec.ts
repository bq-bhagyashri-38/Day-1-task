import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgafterviewinitComponent } from './ngafterviewinit.component';

describe('NgafterviewinitComponent', () => {
  let component: NgafterviewinitComponent;
  let fixture: ComponentFixture<NgafterviewinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgafterviewinitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgafterviewinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
