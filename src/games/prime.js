import rand from '../functions/rand';
import startGame from '..';

const description = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2, end = num / 2; i < end; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const make = (a = rand(100)) => ({
  question: `${a}`,
  result: isPrime(a) ? 'yes' : 'no',
});

const play = () => {
  startGame(make, description);
};

export default play;
