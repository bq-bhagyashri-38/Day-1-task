import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaftercontentinitComponent } from './ngaftercontentinit.component';

describe('NgaftercontentinitComponent', () => {
  let component: NgaftercontentinitComponent;
  let fixture: ComponentFixture<NgaftercontentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgaftercontentinitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgaftercontentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
