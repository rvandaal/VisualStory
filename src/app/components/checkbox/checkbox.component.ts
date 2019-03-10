import { Component, Input } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  static i = 0;
  id: string;

  @Input()
  form: FormGroup;

  @Input()
  controlName: FormControlName;

  constructor() {
    this.id = 'checkbox' + (CheckboxComponent.i++);
    console.log('form: ', this.form);
  }

}
