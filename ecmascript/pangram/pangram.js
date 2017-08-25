const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const isAlpha = a => alphabet.split('').includes(a);

class Pangram {
    constructor(text) {
        this.text = text;
    }

    isPangram() {
        const alpha = [];

        this.text.split('').map(t => t.toLowerCase())
                .filter(isAlpha)
                .map(t => {
                    if(!alpha.includes(t)) {
                        alpha.push(t);
                    }
                    return t;
                 });
        return alpha.length == 26;
    }
}

export default Pangram;
