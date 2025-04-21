import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TSL_Info } from '../models/tsl-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stats',
  imports: [CommonModule, FormsModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  @Input() lockInputs: boolean = false;
  @Input() tslInfo: TSL_Info = {} as TSL_Info;
  @Input() startingStats: any[] = [];
  @Output() hideStartingStatsEmitter: EventEmitter<boolean> = new EventEmitter();

  collapseStats: boolean = false;
  statChosen: boolean = false;
  hideStartingStats: boolean = false;

  updateStat(key: string, increaseStat: boolean) {
    if (increaseStat) {
      this.tslInfo.stats[key as keyof typeof this.tslInfo.stats]! ++;
    } else {
      this.tslInfo.stats[key as keyof typeof this.tslInfo.stats]! --;
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
      this.hideStartingStatsEmitter.emit(this.hideStartingStats);
    }
  }
}
