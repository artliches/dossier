import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  imports: [CommonModule],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss'
})
export class ConditionsComponent {
  conditionsArray: any[] = [
    {
      name: 'ANGRY',
      statChange: `-2 to <strong>Figure Out a Person</strong>`,
      clear: `To clear, break something important to you or someone you care about`,
    },
    {
      name: 'FRIGHTENED',
      statChange: `-2 to <strong>Fight</strong>`,
      clear: `To clear, run away and leave something important behind`,
    },
    {
      name: 'GUILTY',
      statChange: `-2 to <strong>Emotional Support</strong>`,
      clear: `To clear, sacrifice something important just to hurt yourself for what you did`,
    },
    {
      name: 'HOPELESS',
      statChange: `-2 to <strong>Defy Disaster</strong>`,
      clear: `To clear, lose yourself in escapism or pleasure when you should be doing something important`,
    },
    {
      name: 'FRIGHTENED',
      statChange: `-2 to <strong>Entice</strong>`,
      clear: `To clear, take rash action to confront the object of your jealousy and prove your worth without any plan or advice`,
    },
  ];
  chosenConditionsIndexes: number[] = [];

  toggleCondition(index: number) {
    if (this.chosenConditionsIndexes.includes(index)) {
      const indexLocation = this.chosenConditionsIndexes.indexOf(index);
      this.chosenConditionsIndexes.splice(indexLocation, 1);
    } else {
      this.chosenConditionsIndexes.push(index);
    }
  }  
}
