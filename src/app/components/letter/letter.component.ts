import { Component, Input } from '@angular/core';
import { Letter } from '../../models/letter';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent {

  @Input()
  letter: Letter;

  constructor() { }


}
