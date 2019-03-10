export class Letter {
    static klinkers = /[eaoui]/;

    isVisible = true;

    get isKlinker() {
        return Letter.klinkers.test(this.text);
    }

    constructor(public text: string) { }
}
