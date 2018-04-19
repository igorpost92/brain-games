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

const make = (a, b) => {
  const iA = a || rand(50);
  const iB = b || rand(50);

  return {
    question: `${iA} ${iB}`,
    result: `${gcd(iA, iB)}`,
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
