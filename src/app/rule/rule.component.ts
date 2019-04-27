import { Component, Input } from '@angular/core';
import { Rule } from '../models/rule';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent {

  static i = 0;

  get id() {
    return RuleComponent.i++;
  }

  get collapseId() {
    return 'collapse' + this.id;
  }

  @Input()
  rule: Rule;

  constructor() { }

}
