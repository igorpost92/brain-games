import { rand, isPrime } from '../utils';
import startGame from '..';

const description = 'Is this number prime?';

const make = () => {
  const a = rand(100);

  return {
    question: `${a}`,
    result: isPrime(a) ? 'yes' : 'no',
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
