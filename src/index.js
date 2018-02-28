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
        this.num = this.num.split(' ');
        let last = '';
        while((this.num[this.num.length - 1] != '+')&&(this.num[this.num.length - 1] != '-')&&(this.num[this.num.length - 1] != '/')&&(this.num[this.num.length - 1] != '*')&&(this.num.length!=0)){
            last += this.num.pop();
        }
        this.num = this.num.join(' ');

        this.num = `${this.num} ${Math.pow(+last,n)}`;
        return this;
    }

    toString() {
        return eval(this.num);
    }
}

module.exports = SmartCalculator;
