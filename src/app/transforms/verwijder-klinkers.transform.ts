import { Verhaal } from './../models/verhaal';
import { Woord } from '../models/woord';
import { CheckBoxBaseTransform } from './checkbox-base.transform';

export class VerwijderKlinkersTransform extends CheckBoxBaseTransform {

    name = 'verwijderKlinkers';
    description = 'Verwijder klinkers';

    public internalTransform(verhaal: Verhaal): Verhaal {
        verhaal.zinnen.forEach(z => {
            z.zinsdelen.forEach(zd => {
                const woord = zd as Woord;
                if (zd.isWoord) {
                    woord.letters.forEach(l => {
                        if (l.isKlinker) {
                            l.isVisible = false;
                        }
                    });
                }
            });
        });
        return verhaal;
    }
}
