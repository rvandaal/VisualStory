import { Component, Input } from '@angular/core';
import { Punctuation } from '../models/punctuation';

@Component({
  selector: 'app-punctuation',
  templateUrl: './punctuation.component.html',
  styleUrls: ['./punctuation.component.css']
})
export class PunctuationComponent {

  @Input()
  punctuation: Punctuation;

  constructor() { }

}
