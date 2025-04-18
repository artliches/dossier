import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TSL_Info } from './models/tsl-interface';
import { BEAST, CHOSEN, DEVOTED, INFAMOUS, PLAYBOOK_LIST } from '../../public/assets/playbooks.constants';
import { UniquePlaybookMechanicsComponent } from "./unique-playbook-mechanics/unique-playbook-mechanics.component";
import { MovesComponent } from './moves/moves.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, UniquePlaybookMechanicsComponent, MovesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  collapseStats: boolean = false;
  lockInputs: boolean = false;
  tslInfo: TSL_Info = {} as TSL_Info;
  playbooksArray = PLAYBOOK_LIST;
  startingStats: any[] = [];
  hideStartingStats: boolean = false;
  statChosen: boolean = false;

  playbookChosen() {
    let playbookInfo;
    this.tslInfo.stats = {
      daring: null,
      grace: null,
      heart: null,
      wit: null,
      spirit: null
    };
    switch (true) {
      case this.tslInfo.playbook === 'beast': {
        playbookInfo = BEAST;
        this.tslInfo.playbook_descrip = BEAST.descrip;
        this.startingStats = BEAST.startingStats;
        this.tslInfo.truths = BEAST.truths;
        break;
      }
      case this.tslInfo.playbook === 'chosen': {
        playbookInfo = CHOSEN;
        this.tslInfo.playbook_descrip = CHOSEN.descrip;
        this.startingStats = CHOSEN.startingStats;
        this.tslInfo.truths = CHOSEN.truths;
        break;
      }
      case this.tslInfo.playbook === 'devoted': {
        playbookInfo = DEVOTED;
        this.tslInfo.playbook_descrip = DEVOTED.descrip;
        this.startingStats = DEVOTED.startingStats;
        this.tslInfo.truths = DEVOTED.truths;
        break;
      }
      case this.tslInfo.playbook === 'infamous': {
        playbookInfo = INFAMOUS;
        this.tslInfo.playbook_descrip = INFAMOUS.descrip;
        this.startingStats = INFAMOUS.startingStats;
        this.tslInfo.truths = INFAMOUS.truths;
        break;
      }
      default: {
        playbookInfo = '';
        this.tslInfo = {} as TSL_Info;
        break;
      }
    }
  }

  chooseStat(statChoice: number[]) {
    Object.entries(this.tslInfo.stats).forEach(([key, value], index) => {
      this.tslInfo.stats[key as keyof typeof this.tslInfo.stats] = statChoice[index];
    });
    this.statChosen = true;
  }

  removeStartingStatSelection(statChosen: boolean) {
    if (statChosen) {
      this.hideStartingStats = true;
    }
  }

  updateStat(key: string, increaseStat: boolean) {
    if (increaseStat) {
      this.tslInfo.stats[key as keyof typeof this.tslInfo.stats]! ++;
    } else {
      this.tslInfo.stats[key as keyof typeof this.tslInfo.stats]! --;
    }
  }

  showStatSection() {
    return this.tslInfo.hasOwnProperty('playbook') && this.tslInfo.playbook !== '';
  }
}
