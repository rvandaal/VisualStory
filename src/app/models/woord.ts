import { Zinsdeel } from './zinsdeel';
import { Letter } from './letter';

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
}
