import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BEAST, INFAMOUS, PLAYBOOK_LIST } from '../../../../public/assets/playbooks.constants';
import { UpperCasePipe } from '@angular/common';
import { CharacterObj } from '../../models/tsl-interface';

@Component({
  selector: 'app-identity-step',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './identity-step.component.html',
  styleUrl: './identity-step.component.scss'
})
export class IdentityStepComponent implements OnInit {
  @Input() characterObj: CharacterObj = {} as CharacterObj
  @Output() formValidEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() formValues: EventEmitter<any> = new EventEmitter();
  playbookArray: string[] = PLAYBOOK_LIST;
  playbookDescrip: string = '';

  identityForm: FormGroup = new FormGroup({
    name: new FormControl( '', Validators.required),
    pronouns: new FormControl(''),
    playbookName: new FormControl('')
  });

  ngOnInit(): void {
    this.identityForm.setValue({
      name: this.characterObj.name ? this.characterObj.name : '',
      pronouns: this.characterObj.pronouns ? this.characterObj.pronouns: '',
      playbookName: this.characterObj.playbookName ? this.characterObj.playbookName : ''
    });
    this.identityForm.get('playbookName')?.valueChanges.subscribe(value => {
      this.playbookDescrip = this.getPlaybookDescrip(value);
    })
    this.identityForm.valueChanges.subscribe(changes => {
      this.formValidEmitter.emit(this.identityForm.valid);
      if (this.identityForm.valid) {
        this.formValues.emit(this.identityForm.value);
      }
    })
  }

  getPlaybookDescrip(playbookName: string) {
    switch(true) {
      case playbookName === 'beast' : {
        return BEAST.descrip;
      }
      case playbookName === 'infamous': {
        return INFAMOUS.descrip;
      }
      default: {
        return '';
      }
    }
  }
}
