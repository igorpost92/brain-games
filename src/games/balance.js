import { rand, compareArrays } from '../utils';
import startGame from '..';

const isBalanced = (num) => {
  const orig = [...String(num)];
  const sorted = orig.slice().sort();
  if (!compareArrays(orig, sorted)) {
    return false;
  }
  const diff = sorted[sorted.length - 1] - sorted[0];
  return diff < 2;
};

const balance = (num) => {
  if (isBalanced(num)) {
    return num;
  }

  const sorted = [...String(num)].sort();
  sorted[sorted.length - 1] -= 1;
  sorted[0] = Number(sorted[0]) + 1;
  return balance(sorted.sort().join(''));
};

const description = 'Balance the given number.';

const make = () => {
  const a = rand(10000);

  return ({
    question: `${a}`,
    result: `${balance(a)}`,
  });
};

const play = () => {
  startGame(make, description);
};

export default play;
