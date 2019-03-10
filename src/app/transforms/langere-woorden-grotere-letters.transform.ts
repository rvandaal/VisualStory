import { Verhaal } from './../models/verhaal';
import { IBaseTransform } from './base.transform';
import { FormControl, AbstractControl } from '@angular/forms';

export class LangereWoordenGrotereLetters implements IBaseTransform {

    name = 'langereWoordenGrotereLetters';

    private _ac: AbstractControl = new FormControl(false);
    get control(): AbstractControl {
        return this._ac;
    }

    public transform(verhaal: Verhaal): Verhaal {
        return verhaal;
    }
}
