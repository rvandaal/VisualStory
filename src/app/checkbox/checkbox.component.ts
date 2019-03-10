import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  static i = 0;
  id: string;

  private _isChecked: boolean;

  get isChecked() {
    return this._isChecked;
  }

  set (value: boolean) {
    this._isChecked = value;
    alert(' done');
    // ...
  }

  constructor() {
    this.id = 'checkbox' + (CheckboxComponent.i++);
  }

}
