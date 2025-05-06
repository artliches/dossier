import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityFooterComponent } from './utility-footer.component';

describe('UtilityFooterComponent', () => {
  let component: UtilityFooterComponent;
  let fixture: ComponentFixture<UtilityFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
