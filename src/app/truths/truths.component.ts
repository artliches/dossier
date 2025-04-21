import { Component, Input } from '@angular/core';
import { NameQuestionObj } from '../models/tsl-interface';

@Component({
  selector: 'app-truths',
  imports: [],
  templateUrl: './truths.component.html',
  styleUrl: './truths.component.scss'
})
export class TruthsComponent {
  @Input() truths: NameQuestionObj[] = [];

}
