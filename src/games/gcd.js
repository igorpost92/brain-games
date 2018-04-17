import rand from '../functions/rand';

const gcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  } else if (a > b) {
    return gcd(a % b, b);
  }
  return gcd(a, b % a);
};

const make = (a = rand(50), b = rand(50)) => ({
  description: 'Find the greatest common divisor of given numbers.',
  question: () => `${a} ${b}`,
  result: () => `${gcd(a, b)}`,
});

export default make;
