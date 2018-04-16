import rand from '../rand';
import gcd from '../gcd';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export default class GCD {
  constructor() {
    this.nextRound();
  }

  nextRound() {
    this.a = rand(50);
    this.b = rand(50);
  }

  toString() {
    return `${this.a} and ${this.b}`;
  }

  result() {
    return String(gcd(this.a, this.b));
  }

  isRight(value) {
    return this.result() === value;
  }
}
