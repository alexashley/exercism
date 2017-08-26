class Diamond {
    makeDiamond(letter) {
        const lenDiff = letter.charCodeAt() - 'A'.charCodeAt();
        if (!lenDiff)
            return letter + '\n';
        const len = 2 * lenDiff + 1;

        const row = Array(len).fill().map(() => ' ');
        const halfLen = Math.floor(len / 2);
        const topHalf = Array(halfLen).fill().map(() => [...row]);
        
        topHalf.forEach((row, idx) => {
            if (idx == halfLen) {
                row[halfLen] = 'A';
            } else { 
                const currLetter = String.fromCharCode('A'.charCodeAt() + idx);
                row[halfLen - idx] = currLetter;
                row[halfLen + idx] = currLetter;
            }
        });
        const middle = [letter, ...row.slice(2), letter];
        
        const halfDiamond = topHalf.map(r => r.join(''));
        return [
            ...halfDiamond,
            middle.join(''),
            ...halfDiamond.reverse()
        ].join('\n') + '\n';
    }
}

export default Diamond;
