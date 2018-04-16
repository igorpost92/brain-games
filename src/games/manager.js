import { question } from 'readline-sync';

export default class Manager {
  constructor(player, game) {
    this.player = player;
    this.game = game;
  }

  playRound(rounds) {
    if (rounds === 0) {
      return 0;
    }

    this.game.nextRound();

    console.log(`Question: ${this.game.toString()}`);
    const answer = question('Your answer: ');
    const isCorrect = this.game.isRight(answer);
    console.log(isCorrect ? 'Correct!' : `Wrong! Correct answer is ${this.game.result()}`);
    return this.playRound(rounds - 1) + Number(isCorrect);
  }

  startGame() {
    const rounds = 3;
    const correctAnswers = this.playRound(rounds);
    if (correctAnswers === rounds) {
      console.log(`Congratulations, ${this.player}!`);
    } else if (correctAnswers > 0) {
      console.log(`You gave only ${correctAnswers} correct answers.`);
    } else {
      console.log('You lost.');
    }
  }
}
