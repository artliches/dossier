import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ForgiveObj, InfamousUnique } from '../models/tsl-interface';
import { INFAMOUS_UNIQUE } from '../../../public/assets/playbooks.constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unique-playbook-mechanics',
  imports: [CommonModule, FormsModule],
  templateUrl: './unique-playbook-mechanics.component.html',
  styleUrl: './unique-playbook-mechanics.component.scss'
})
export class UniquePlaybookMechanicsComponent implements OnChanges {
  @Input() playbook: string = '';
  playbookUnique: any;

  forgivenessArray: ForgiveObj[] = [];
  toggleCollapse: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
      switch (true) {
        case this.playbook === 'infamous': {
          this.playbookUnique = INFAMOUS_UNIQUE;
          this.addAtoneSection();
        }
      }
  }

  addAtoneSection() {
    this.forgivenessArray.push({
      name: '',
      atonement: '',
      forgiven: false, 
    });
  }

  removeAtoneSection(index: number) {
    this.forgivenessArray.splice(index, 1);
  }

  toggleForgive(index: number) {
    this.forgivenessArray[index].forgiven = !this.forgivenessArray[index].forgiven;
  }
}
