import { Verhaal } from './../models/verhaal';
import { IBaseTransform } from './base.transform';
import { FormControl } from '@angular/forms';
import { Woord } from '../models/woord';

export abstract class CheckBoxBaseTransform implements IBaseTransform {

    name = null;
    description = null;

    private _ac = new FormControl(false);
    get control() {
        return this._ac;
    }

    public transform(verhaal: Verhaal): Verhaal {
        if (!this.control.value) { return verhaal; }
        return this.internalTransform(verhaal);
    }

    protected internalTransform(verhaal: Verhaal): Verhaal {
        return verhaal;
    }
}
