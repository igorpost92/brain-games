import { question } from 'readline-sync';

const startGame = (createGame, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const game = createGame();

    console.log(`Question: ${game.question}`);
    const answer = question('Your answer: ');
    const { result } = game;
    const isCorrect = result === answer;

    if (!isCorrect) {
      console.log(`"${answer}" is a wrong answer :( Correct answer was "${result}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
