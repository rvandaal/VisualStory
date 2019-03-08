import { Zinsdeel } from './models/zinsdeel';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Punctuation } from './models/punctuation';
import { Woord } from './models/woord';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  punctuationRegex = /[.,:;?! ]/;

  zinsdelen: Zinsdeel[];

  @ViewChild('input') input: ElementRef;

  get inputText() {
    return this.input.nativeElement.value;
  }

  private onTransform() {
    this.transformInput();
  }

  private transformInput() {
    this.zinsdelen = [];
    let woord: string[] = [];
    const characters: string[] = Array.from(this.inputText);
    characters.forEach(c => {
      if (this.punctuationRegex.test(c)) {
        if (woord.length) {
          this.zinsdelen.push(new Woord(woord));
          woord = [];
        }
        this.zinsdelen.push(new Punctuation(c));
      } else {
        woord.push(c);
      }
    });
  }


}
