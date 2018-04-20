import { rand, gcd } from '../utils';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const make = () => {
  const a = rand(50);
  const b = rand(50);

  return {
    question: `${a} ${b}`,
    result: `${gcd(a, b)}`,
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
