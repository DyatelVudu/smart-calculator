class SmartCalculator {
    constructor(x) {
        this.num = x + '';
    }

    add(n) {
        this.num = `${this.num} + ${n}`;
        return this;
    }

    subtract(n) {
        this.num = `${this.num} - ${n}`;
        return this;
    }

    multiply(n) {
        this.num = `${this.num} * ${n}`;
        return this;
    }

    devide(n) {
        this.num = `${this.num} / ${n}`;
        return this;
    }

    pow(n) {
        this.num = `${this.num} ** ${n}`;
        return this;
    }

    toString() {
        return eval(this.num);
    }
}

module.exports = SmartCalculator;
