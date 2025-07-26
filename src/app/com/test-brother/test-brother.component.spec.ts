import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBrotherComponent } from './test-brother.component';

describe('TestBrotherComponent', () => {
  let component: TestBrotherComponent;
  let fixture: ComponentFixture<TestBrotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBrotherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
