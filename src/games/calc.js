import rand from '../functions/rand';
import startGame from '..';

const description = 'What is the result of the expression?';

const operations = [
  { name: '+', ev: (a, b) => a + b },
  { name: '-', ev: (a, b) => a - b },
  { name: '*', ev: (a, b) => a * b },
];

const make = (a = rand(11), b = rand(11), op = operations[rand(3)]) => ({
  question: () => `${a} ${op.name} ${b}`,
  result: () => `${op.ev(a, b)}`,
});

const play = () => {
  startGame(make, description);
};

export default play;
