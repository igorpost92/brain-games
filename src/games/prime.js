import rand from '../functions/rand';
import startGame from '..';

const description = 'Is this number prime?';

const isPrime = (num) => {
  const limit = num / 2;

  const iter = (i) => {
    if (i > limit) {
      return true;
    } else if (num % i === 0) {
      return false;
    }
    return iter(i + 1);
  };

  return iter(2);
};

const make = (a) => {
  const iA = a || rand(100);

  return {
    question: `${iA}`,
    result: isPrime(iA) ? 'yes' : 'no',
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
