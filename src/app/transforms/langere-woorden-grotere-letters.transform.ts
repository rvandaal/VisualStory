import { Verhaal } from './../models/verhaal';
import { IBaseTransform } from './base.transform';
import { FormControl } from '@angular/forms';
import { Woord } from '../models/woord';

export class LangereWoordenGrotereLetters implements IBaseTransform {

    name = 'langereWoordenGrotereLetters';

    private _ac = new FormControl(false);
    get control() {
        return this._ac;
    }

    public transform(verhaal: Verhaal): Verhaal {
        if (!this.control.value) { return verhaal; }

        verhaal.zinsdelen.forEach(z => {
            const woord = z as Woord;
            if (z.isWoord) {
                const fontsize = 1 + woord.letters.length * 0.1;
                woord.fontsize = `${fontsize}em`;
            }
        });
        return verhaal;
    }
}
