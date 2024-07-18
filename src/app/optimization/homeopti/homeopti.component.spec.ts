import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeoptiComponent } from './homeopti.component';

describe('HomeoptiComponent', () => {
  let component: HomeoptiComponent;
  let fixture: ComponentFixture<HomeoptiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeoptiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeoptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
