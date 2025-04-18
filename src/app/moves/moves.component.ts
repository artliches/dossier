import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MoveObj } from '../models/tsl-interface';
import { INFAMOUS_MOVES } from '../../../public/assets/playbooks.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moves',
  imports: [CommonModule],
  templateUrl: './moves.component.html',
  styleUrl: './moves.component.scss'
})
export class MovesComponent implements OnChanges {
  @Input() playbook: string = '';
  @Input() lockInputs: boolean = false;

  chosenMoves: MoveObj[] = [];
  builderMoves: MoveObj[] = [];
  tempChosenMoves: MoveObj[] = [];
  canFinalize: boolean = false;
  finalized: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['playbook']) {
        switch (true) {
          case this.playbook === 'infamous': {
            this.chosenMoves = INFAMOUS_MOVES.filter(move => move.starting);
            this.builderMoves = INFAMOUS_MOVES.filter(move => !move.starting);
          }
        }
      }
  }

  addRemoveToTempChosenMoves(index: number) {
    if (this.tempChosenMoves.includes(this.builderMoves[index])) {
      const moveIndex = this.tempChosenMoves.findIndex(move => move.title === this.builderMoves[index].title);
      this.tempChosenMoves.splice(moveIndex, 1);
    } else {
      this.tempChosenMoves.push(this.builderMoves[index]);
    }
    this.canFinalize = this.tempChosenMoves.length === 2;
  }

  finalizeStartingMoves() {
    this.tempChosenMoves.forEach(move => this.chosenMoves.push(move));
    this.finalized = true;
  }
}
