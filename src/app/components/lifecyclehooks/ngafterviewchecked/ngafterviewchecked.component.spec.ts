import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgafterviewcheckedComponent } from './ngafterviewchecked.component';

describe('NgafterviewcheckedComponent', () => {
  let component: NgafterviewcheckedComponent;
  let fixture: ComponentFixture<NgafterviewcheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgafterviewcheckedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgafterviewcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
