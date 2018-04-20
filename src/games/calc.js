import { rand } from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';

const operations = [
  { name: '+', ev: (a, b) => a + b },
  { name: '-', ev: (a, b) => a - b },
  { name: '*', ev: (a, b) => a * b },
];

const make = () => {
  const a = rand(11);
  const b = rand(11);
  const op = operations[rand(3)];

  return {
    question: `${a} ${op.name} ${b}`,
    result: `${op.ev(a, b)}`,
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
