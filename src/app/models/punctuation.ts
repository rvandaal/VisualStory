import { Zinsdeel } from './zinsdeel';
export class Punctuation extends Zinsdeel {

    insertNewLine = false;

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
