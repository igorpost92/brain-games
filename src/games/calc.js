import rand from '../functions/rand';
import startGame from '..';

const description = 'What is the result of the expression?';

const operations = [
  { name: '+', ev: (a, b) => a + b },
  { name: '-', ev: (a, b) => a - b },
  { name: '*', ev: (a, b) => a * b },
];

const make = (a, b, op) => {
  const iA = a || rand(11);
  const iB = b || rand(11);
  const iOp = op || operations[rand(3)];

  return {
    question: `${iA} ${iOp.name} ${iB}`,
    result: `${iOp.ev(iA, iB)}`,
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
