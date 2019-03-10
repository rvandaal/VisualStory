import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WoordComponent } from './woord/woord.component';
import { LetterComponent } from './letter/letter.component';
import { PunctuationComponent } from './punctuation/punctuation.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { VerhaalComponent } from './verhaal/verhaal.component';

@NgModule({
  declarations: [
    AppComponent,
    WoordComponent,
    LetterComponent,
    PunctuationComponent,
    CheckboxComponent,
    VerhaalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
