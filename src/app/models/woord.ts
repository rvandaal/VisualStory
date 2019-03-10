import { Zinsdeel } from './zinsdeel';
import { Letter } from './letter';
import { stringify } from '@angular/core/src/render3/util';

export class Woord extends Zinsdeel {

    public letters: Letter[];

    constructor(woord: string[]) {
        super();
        this.letters = woord.map(l => new Letter(l));
    }

    get isWoord() {
        return true;
    }

    get isPunctuation() {
        return false;
    }

    get fontsize() {
        const size = 1 + this.letters.length * 0.1;
        return `${size}em`;
    }
}
