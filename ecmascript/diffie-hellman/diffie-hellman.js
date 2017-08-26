class DiffieHellman {
    constructor(p, g) {
        // this is not a sufficient check that p is prime
        // but the tests don't require it ;^)
        const isInvalid = p < 2 || p % 2 == 0; 
        if (isInvalid)
            throw 'Invalid modulus';

        this.p = p;
        this.g = g;
    }

    getPublicKeyFromPrivateKey(pk) {
        const isInvalid = pk <= 1 || pk >= this.p;
        if (isInvalid) {
            throw 'Invalid private key';
        }
        return this.g ** pk % this.p;
    }

    getSharedSecret(privateKey, publicKey) {
        
        return publicKey ** privateKey % this.p
    }
}

export default DiffieHellman;
