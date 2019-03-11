import { Verhaal } from './../models/verhaal';
import { CheckBoxBaseTransform } from './checkbox-base.transform';

export class NewLineTransform extends CheckBoxBaseTransform {

    lineDelimiters = /[.?!:;]/;

    name = 'nieuweregel';
    description = 'Begin elke zin op een nieuwe regel';

    protected internalTransform(verhaal: Verhaal): Verhaal {
        verhaal.zinnen.forEach(z => {
            z.newLines = 1;
        });
        return verhaal;
    }
}
