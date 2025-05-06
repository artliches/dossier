import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilityFooterComponent } from "./utility-footer/utility-footer.component";
import { CreatorComponent } from './creator/creator.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, UtilityFooterComponent, CreatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  tslCharList: any | null = null;
  startCharacterBuilder: boolean = false;

  characterObj = {
    name: '',
    pronouns: '',
    playbookName: '',
  };
  
  ngOnInit(): void {
      this.tslCharList = localStorage.getItem('tsl-char-list');
  }
}
