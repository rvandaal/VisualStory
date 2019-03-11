import { VerwijderKlinkersTransform } from './transforms/verwijder-klinkers.transform';
import { LangereWoordenGrotereLettersTransform } from './transforms/langere-woorden-grotere-letters.transform';
import { Component} from '@angular/core';
import { Punctuation } from './models/punctuation';
import { Woord } from './models/woord';
import { FormGroup, FormControl } from '@angular/forms';
import { Verhaal } from './models/verhaal';
import { IBaseTransform } from './transforms/base.transform';
import { NewLineTransform } from './transforms/new-line.transform';

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

  constructor() {
    this.inputVerhaal = new Verhaal();
    this.transformaties = [
      new LangereWoordenGrotereLettersTransform(),
      new VerwijderKlinkersTransform(),
      new NewLineTransform()
    ];

    this.form = new FormGroup({
      inputText: new FormControl(null)
    });

    this.transformaties.forEach(t => {
      this.form.addControl(t.name, t.control);
    });

    this.form.valueChanges.subscribe(v => {
      this.transform(this.convertInput());
    });
  }

  private convertInput(): Verhaal {
    const zinsdelen = [];
    let woord: string[] = [];
    const characters: string[] = Array.from(this.form.get('inputText').value);
    characters.forEach(c => {
      if (c.trim() === '' || this.punctuationRegex.test(c)) {
        if (woord.length) {
          zinsdelen.push(new Woord(woord));
          woord = [];
        }
        zinsdelen.push(new Punctuation(c));
      } else {
        woord.push(c);
      }
    });
    if (woord.length) {
      zinsdelen.push(new Woord(woord));
    }
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
