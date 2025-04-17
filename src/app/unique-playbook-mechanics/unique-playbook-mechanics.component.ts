import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-unique-playbook-mechanics',
  imports: [],
  templateUrl: './unique-playbook-mechanics.component.html',
  styleUrl: './unique-playbook-mechanics.component.scss'
})
export class UniquePlaybookMechanicsComponent implements OnChanges {
  @Input() playbook: string = '';

  ngOnChanges(changes: SimpleChanges): void {
      
  }
}
