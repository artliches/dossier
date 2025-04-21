import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruthsComponent } from './truths.component';

describe('TruthsComponent', () => {
  let component: TruthsComponent;
  let fixture: ComponentFixture<TruthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruthsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
