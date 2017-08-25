const nucleotideMapping = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
}

const mapToRna = nucleotide => {
    const rna  = nucleotideMapping[nucleotide];
    return rna ? rna : '?';
}

class Transcriptor {
    toRna(dna) {
        const rna = dna.split('').map(mapToRna).join('');
        if (rna.includes('?')) {
            throw new Error('Invalid input DNA.');
        }
        return rna;
    }
}

export default Transcriptor;
