import { VerwijderKlinkersTransform } from './transforms/verwijder-klinkers.transform';
import { LangereWoordenGrotereLettersTransform } from './transforms/langere-woorden-grotere-letters.transform';
import { Component } from '@angular/core';
import { Punctuation } from './models/punctuation';
import { Woord } from './models/woord';
import { FormGroup, FormControl } from '@angular/forms';
import { Verhaal } from './models/verhaal';
import { IBaseTransform } from './transforms/base.transform';
import { NewLineTransform } from './transforms/new-line.transform';
import { Zin } from './models/zin';
import { RangeValueAccessor } from '@angular/forms/src/directives';
import { Rule } from './models/rule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  punctuationRegex = /[.,:;?! ]/;
  newLineRegex = /[.!?:;]/;

  inputVerhaal: Verhaal;
  outputVerhaal: Verhaal;
  transformaties: IBaseTransform[];
  form: FormGroup;

  rules: Rule[];

  constructor() {
    this.inputVerhaal = new Verhaal();
    this.transformaties = [
      new LangereWoordenGrotereLettersTransform(),
      new VerwijderKlinkersTransform(),
      new NewLineTransform()
    ];

    this.form = new FormGroup({
      // inputText: new FormControl('Hallo ik ben Rob. Hoe heet jij?')
      inputText: new FormControl(null),
      dyslexiefont: new FormControl(false),
      bold: new FormControl(false),
      italic: new FormControl(false)
    });

    this.transformaties.forEach(t => {
      this.form.addControl(t.name, t.control);
    });

    this.form.valueChanges.subscribe(v => {
      if (this.form.get('inputText').value) {
        this.transform(this.convertInput());
      }
    });

    // this.rules = [ new Rule(), new Rule()];
  }

  private convertInput(): Verhaal {
    const zinnen = [];
    let zinsdelen = [];
    let woord: string[] = [];
    const characters: string[] = Array.from(this.form.get('inputText').value);
    characters.forEach(c => {
      if (c.trim() === '' || this.punctuationRegex.test(c)) {
        if (woord.length) {
          zinsdelen.push(new Woord(woord));
          woord = [];
        }
        if (zinsdelen.length) {
          zinsdelen.push(new Punctuation(c));
        }
        if (this.newLineRegex.test(c)) {
          zinnen.push(new Zin(zinsdelen));
          zinsdelen = [];
        }
      } else {
        woord.push(c);
      }
    });
    if (woord.length) {
      zinsdelen.push(new Woord(woord));
    }
    if (zinsdelen.length) {
      zinnen.push(new Zin(zinsdelen));
    }
    const verhaal = new Verhaal();
    verhaal.zinnen = zinnen;
    return verhaal;
  }

  private transform(verhaal: Verhaal) {
    this.transformaties.forEach(t => {
      verhaal = t.transform(verhaal);
    });
    this.outputVerhaal = verhaal;
  }
}
