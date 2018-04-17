import { question } from 'readline-sync';
import makeEven from './games/even';
import makeCalc from './games/calc';
import makeGcd from './games/gcd';

const games = ({
  even: makeEven,
  calc: makeCalc,
  gcd: makeGcd,
});

const startGame = (gameName) => {
  const createGame = games[gameName];

  console.log('Welcome to the Brain Games!');
  console.log(createGame().description);
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const game = createGame();
    console.log(`Question: ${game.question()}`);
    const answer = question('Your answer: ');
    const result = game.result();
    const isCorrect = result === answer;

    if (!isCorrect) {
      console.log(`"${answer}" is a wrong answer :( Correct answer was "${result}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
