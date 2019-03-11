import { Verhaal } from './../models/verhaal';
import { CheckBoxBaseTransform } from './checkbox-base.transform';
import { Punctuation } from '../models/punctuation';

export class NewLineTransform extends CheckBoxBaseTransform {

    lineDelimiters = /[.?!:;]/;

    name = 'nieuweregel';
    description = 'Begin elke zin op een nieuwe regel';

    protected internalTransform(verhaal: Verhaal): Verhaal {
        verhaal.zinsdelen.forEach(z => {
            const punctuation = z as Punctuation;
            if (z.isPunctuation && this.lineDelimiters.test(punctuation.text)) {
                punctuation.insertNewLine = true;
            }
        });
        return verhaal;
    }
}
