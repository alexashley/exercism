class Sieve {
    constructor(number) {
        const upperBound = Math.sqrt(number);
        let primes = Array(number).fill().map((val, i) => i+1).slice(1);
        let index = 0;
        while(primes[index] < upperBound) {
            const current = primes[index];
            primes = primes.filter(number => number % current != 0 || number == current);
            index++;
        }
        return { primes };
    }
}

export default Sieve;
