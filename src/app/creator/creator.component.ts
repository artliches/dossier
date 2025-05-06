import { Component, Input } from '@angular/core';
import { IdentityStepComponent } from './identity-step/identity-step.component';
import { JsonPipe } from '@angular/common';
import { CharacterObj } from '../models/tsl-interface';
import { STEPS_TITLES } from '../../../public/assets/playbooks.constants';

@Component({
  selector: 'app-creator',
  imports: [IdentityStepComponent, JsonPipe],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.scss'
})
export class CreatorComponent {
  currentStep: number = 0;
  stepsTitles: string[] = STEPS_TITLES;
  disableNextButton: boolean = true;

  charObj: CharacterObj = {} as CharacterObj;
  tempCharacterValues: CharacterObj = {} as CharacterObj;

  toggleNextButton(event: boolean) {
    this.disableNextButton = !event;
  }

  goToNextStep() {
    if (!this.disableNextButton) {
      this.fillCharacterObj();
      this.currentStep ++;
    }
  }

  goToPreviousStep() {
    this.currentStep --;
  }

  private fillCharacterObj() {
    for (const [key, value] of Object.entries(this.tempCharacterValues)) {
      this.charObj[key as keyof typeof this.charObj] = value;
    }
  }

  assignTemporaryCharacterObj(event: any) {
    this.tempCharacterValues = event;
  }
}
