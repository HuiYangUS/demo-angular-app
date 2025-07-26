import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSisterComponent } from './test-sister.component';

describe('TestSisterComponent', () => {
  let component: TestSisterComponent;
  let fixture: ComponentFixture<TestSisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
