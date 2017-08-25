const mapping = {
    '(':')',
    '[':']',
    '{':'}'
};

const left = Object.keys(mapping);
const right = Object.values(mapping);

const pushBracket = ([lstack, rstack], current, index) => {
    if (left.includes(current)) {
        lstack.push([current, index]);
    } else if (right.includes(current)) {
        rstack.push([current, index]);
    }

    return [lstack, rstack];
}

const isEven = n => n % 2 == 0;
const isOdd = n => !isEven(n);
const diffParity = (l,r) => {
    return (isEven(l) && isOdd(r)) || (isOdd(l) && isEven(r)); 
}

const bracket = input => {
    const brackets = input.split('');
    const [lstack, rstack] = brackets.reduce(pushBracket, [[],[]]);
    return lstack.length == rstack.length && lstack.map(([lbracket, ldepth]) => {
        const match = rstack.filter(([rbracket,rdepth]) => {
            return rbracket == mapping[lbracket] 
                    && ldepth < rdepth
                    && diffParity(ldepth, rdepth)
        }).length != 0;
        return match;
    }).reduce((acc, hasMatch) => acc && hasMatch, true);
}

export default bracket;
