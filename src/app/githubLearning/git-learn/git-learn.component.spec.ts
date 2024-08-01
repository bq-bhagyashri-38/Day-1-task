import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitLearnComponent } from './git-learn.component';

describe('GitLearnComponent', () => {
  let component: GitLearnComponent;
  let fixture: ComponentFixture<GitLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
