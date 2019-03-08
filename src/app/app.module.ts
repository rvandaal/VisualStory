import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WoordComponent } from './woord/woord.component';
import { LetterComponent } from './letter/letter.component';
import { PunctuationComponent } from './punctuation/punctuation.component';

@NgModule({
  declarations: [
    AppComponent,
    WoordComponent,
    LetterComponent,
    PunctuationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
