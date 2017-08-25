const isMultiple = (number , divisor) => number % divisor == 0;

class Year {
    constructor(year) {
        this.year = year;
    }
    
    isLeap() {
        const divisibleBy100 = isMultiple(this.year, 100);
        return isMultiple(this.year, 4) && (!divisibleBy100 || 
                    (divisibleBy100 && isMultiple(this.year, 400)));
    }
}

export default Year;
