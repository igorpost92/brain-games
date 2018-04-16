import rand from '../rand';

export const gameDescription = 'What is the result of the expression?';

const operations = [
  { name: '+', ev: (a, b) => a + b },
  { name: '-', ev: (a, b) => a - b },
  { name: '*', ev: (a, b) => a * b },
];

export default class Calc {
  constructor() {
    this.nextRound();
  }

  nextRound() {
    this.a = rand(11);
    this.b = rand(11);
    this.op = operations[rand(3)];
  }

  toString() {
    return `${this.a} ${this.op.name} ${this.b}`;
  }

  result() {
    return String(this.op.ev(this.a, this.b));
  }

  isRight(value) {
    return this.result() === value;
  }
}
