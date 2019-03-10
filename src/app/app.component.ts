import { LangereWoordenGrotereLetters } from './transforms/langere-woorden-grotere-letters.transform';
import { Zinsdeel } from './models/zinsdeel';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Punctuation } from './models/punctuation';
import { Woord } from './models/woord';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Verhaal } from './models/verhaal';
import { IBaseTransform } from './transforms/base.transform';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  punctuationRegex = /[.,:;?! ]/;

  inputVerhaal: Verhaal;
  outputVerhaal: Verhaal;
  transformaties: IBaseTransform[];
  form: FormGroup;

  @ViewChild('input') input: ElementRef;

  constructor() {
    this.inputVerhaal = new Verhaal();
    this.transformaties = [
      new LangereWoordenGrotereLetters()
    ];

    this.form = new FormGroup({
      inputText: new FormControl(null)
    });

    this.transformaties.forEach(t => {
      this.form.addControl(t.name, t.control);
    });

    this.form.valueChanges.subscribe(v => {
      this.onTransform();
    });
  }

  get inputText() {
    return this.input.nativeElement.value;
  }

  private onTransform() {
    this.transform(this.convertInput());
  }

  private convertInput(): Verhaal {
    const zinsdelen = [];
    let woord: string[] = [];
    const characters: string[] = Array.from(this.inputText);
    characters.forEach(c => {
      if (this.punctuationRegex.test(c)) {
        if (woord.length) {
          zinsdelen.push(new Woord(woord));
          woord = [];
        }
        zinsdelen.push(new Punctuation(c));
      } else {
        woord.push(c);
      }
    });
    const verhaal = new Verhaal();
    verhaal.zinsdelen = zinsdelen;
    return verhaal;
  }

  private transform(verhaal: Verhaal) {
    this.transformaties.forEach(t => {
      verhaal = t.transform(verhaal);
    });
    this.outputVerhaal = verhaal;
  }


}
