import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquePlaybookMechanicsComponent } from './unique-playbook-mechanics.component';

describe('UniquePlaybookMechanicsComponent', () => {
  let component: UniquePlaybookMechanicsComponent;
  let fixture: ComponentFixture<UniquePlaybookMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniquePlaybookMechanicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniquePlaybookMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
