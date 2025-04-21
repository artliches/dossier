import { Component, Input } from '@angular/core';
import { StringObj } from '../models/tsl-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strings',
  imports: [FormsModule, CommonModule],
  templateUrl: './strings.component.html',
  styleUrl: './strings.component.scss'
})
export class StringsComponent {
  @Input() lockInputs: boolean = false;
  stringsObjArray: StringObj[] = [];

  addStringObj() {
    this.stringsObjArray.push({
      name: '',
      numStrings: 0,
    });
  }

  updateString(index: number, numStrings: number) {
    if (!this.lockInputs) {
      if (this.stringsObjArray[index].numStrings >= numStrings) {
        this.stringsObjArray[index].numStrings --;
      } else {
        this.stringsObjArray[index].numStrings ++;
      }
    }
  }

  removeStringObj(index: number) {
    if (!this.lockInputs) {
      this.stringsObjArray.splice(index, 1);
    }
  }
}
