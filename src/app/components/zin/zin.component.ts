import { Component, Input } from '@angular/core';
import { Zin } from 'src/app/models/zin';

@Component({
  selector: 'app-zin',
  templateUrl: './zin.component.html',
  styleUrls: ['./zin.component.css']
})
export class ZinComponent {

  @Input()
  zin: Zin;

  constructor() { }

}
