import rand from '../rand';

export const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default class Even {
  constructor() {
    this.a = 1;
    this.nextRound();
  }

  nextRound() {
    this.a = rand();
  }

  toString() {
    return `${this.a}`;
  }

  result() {
    return this.a % 2 === 0 ? 'yes' : 'no';
  }

  isRight(value) {
    return this.result() === value;
  }
}
