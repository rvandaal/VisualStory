import { Zinsdeel } from './zinsdeel';
export class Zin {

    newLines = 0;

    get newLinesArray() {
        return new Array(this.newLines);
    }

    constructor(public zinsdelen: Zinsdeel[]) { }
}
