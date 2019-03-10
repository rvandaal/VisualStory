export class Letter {
    static klinkers = /[eaoui]/;

    get isKlinker() {
        return Letter.klinkers.test(this.text);
    }

    constructor(public text: string) { }
}
