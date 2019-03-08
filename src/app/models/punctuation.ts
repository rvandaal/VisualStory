import { Zinsdeel } from './zinsdeel';
export class Punctuation extends Zinsdeel {
    constructor(public text: string) {
        super();
    }

    get isWoord() {
        return false;
    }

    get isPunctuation() {
        return true;
    }
}
