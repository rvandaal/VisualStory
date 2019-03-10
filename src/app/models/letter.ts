export class Letter {
    klinkers = /[eaoui]/;

    get isKlinker() {
        return this.klinkers.test(this.text);
    }

    constructor(public text: string) { }
}
