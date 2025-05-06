import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityStepComponent } from './identity-step.component';

describe('IdentityStepComponent', () => {
  let component: IdentityStepComponent;
  let fixture: ComponentFixture<IdentityStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
