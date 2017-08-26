class Octal {
    constructor(number) {
        this.number = number;
    }

    toDecimal() {
        const digits = this.number.split('');
        if (digits.includes('8') || /^[a-z]+$/i.test(this.number))
            return 0;

        return digits.reverse().reduce((total, curr, currIndex) => 
            total + 8**currIndex * curr 
        , 0);
    }
}

export default Octal;
