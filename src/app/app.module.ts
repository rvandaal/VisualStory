import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WoordComponent } from './components/woord/woord.component';
import { LetterComponent } from './components/letter/letter.component';
import { PunctuationComponent } from './components/punctuation/punctuation.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { VerhaalComponent } from './components/verhaal/verhaal.component';
import { TextareaExpandedComponent } from './components/textarea/textarea-expanded-full.components';
import { ZinComponent } from './components/zin/zin.component';
import { RuleComponent } from './rule/rule.component';

@NgModule({
  declarations: [
    AppComponent,
    WoordComponent,
    LetterComponent,
    PunctuationComponent,
    CheckboxComponent,
    VerhaalComponent,
    TextareaExpandedComponent,
    ZinComponent,
    RuleComponent
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
