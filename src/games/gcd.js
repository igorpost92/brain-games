import rand from '../functions/rand';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  } else if (a > b) {
    return gcd(a % b, b);
  }
  return gcd(a, b % a);
};

const make = (a = rand(50), b = rand(50)) => ({
  question: `${a} ${b}`,
  result: `${gcd(a, b)}`,
});

const play = () => {
  startGame(make, description);
};

export default play;
