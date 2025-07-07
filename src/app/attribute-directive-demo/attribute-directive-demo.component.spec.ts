import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveDemoComponent } from './attribute-directive-demo.component';

describe('AttributeDirectiveDemoComponent', () => {
  let component: AttributeDirectiveDemoComponent;
  let fixture: ComponentFixture<AttributeDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirectiveDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
