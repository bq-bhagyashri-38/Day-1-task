import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaftercontentcheckedComponent } from './ngaftercontentchecked.component';

describe('NgaftercontentcheckedComponent', () => {
  let component: NgaftercontentcheckedComponent;
  let fixture: ComponentFixture<NgaftercontentcheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgaftercontentcheckedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgaftercontentcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
