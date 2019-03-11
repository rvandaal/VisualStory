import { Verhaal } from './../models/verhaal';
import { Woord } from '../models/woord';
import { CheckBoxBaseTransform } from './checkbox-base.transform';

export class LangereWoordenGrotereLettersTransform extends CheckBoxBaseTransform {

    name = 'langereWoordenGrotereLetters';
    description = 'Maak langere woorden groter';

    protected internalTransform(verhaal: Verhaal): Verhaal {
        verhaal.zinnen.forEach(z => {
            z.zinsdelen.forEach(zd => {
                const woord = zd as Woord;
                if (zd.isWoord) {
                    const fontsize = 1 + woord.letters.length * 0.1;
                    woord.fontsize = `${fontsize}em`;
                }
            });
        });
        return verhaal;
    }
}
