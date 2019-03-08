import { Component, OnInit, Input } from '@angular/core';
import { Woord } from '../models/woord';

@Component({
  selector: 'app-woord',
  templateUrl: './woord.component.html',
  styleUrls: ['./woord.component.css']
})
export class WoordComponent {

  @Input()
  woord: Woord;

  constructor() { }

}
