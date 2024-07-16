import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbComComponent } from './db-com.component';

describe('DbComComponent', () => {
  let component: DbComComponent;
  let fixture: ComponentFixture<DbComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
