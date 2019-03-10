import { Component, Input } from '@angular/core';
import { Verhaal } from '../../models/verhaal';

@Component({
  selector: 'app-verhaal',
  templateUrl: './verhaal.component.html',
  styleUrls: ['./verhaal.component.css']
})
export class VerhaalComponent {

  @Input()
  verhaal: Verhaal;

  constructor() { }

}
