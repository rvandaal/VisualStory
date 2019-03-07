import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('input') input: ElementRef;

  outputChars: string[];

  get inputText() {
    return this.input.nativeElement.value;
  }

  private onTransform() {
    this.outputChars = Array.from('hello world');
  }


}
