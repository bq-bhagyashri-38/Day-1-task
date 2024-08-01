import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingBranchesComponent } from './testing-branches.component';

describe('TestingBranchesComponent', () => {
  let component: TestingBranchesComponent;
  let fixture: ComponentFixture<TestingBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingBranchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
