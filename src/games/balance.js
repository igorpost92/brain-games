import { rand } from '../utils';
import startGame from '..';

const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, len = arr1.length; i < len; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const isBalanced = (num) => {
  const orig = [...String(num)];
  const sorted = orig.slice().sort();
  if (!compareArrays(orig, sorted)) {
    return false;
  }
  return sorted[sorted.length - 1] - sorted[0] < 2;
};

const balance = (num) => {
  if (isBalanced(num)) {
    return num;
  }

  const sorted = [...String(num)].sort();
  const len = sorted.length - 1;

  let addToIndex = -1;
  for (let i = 0; i < len; i += 1) {
    const curr = sorted[i];
    const next = sorted[i + 1];
    if (curr < next) {
      addToIndex = i;
      break;
    }
  }

  let subtractFromIndex = -1;
  for (let i = len; i > 0; i -= 1) {
    const curr = sorted[i];
    const next = sorted[i - 1];
    if (curr > next) {
      subtractFromIndex = i;
      break;
    }
  }

  sorted[subtractFromIndex] -= 1;
  sorted[addToIndex] = Number(sorted[addToIndex]) + 1;
  return balance(sorted.join(''));
};

const description = 'Balance the given number.';

const make = (a) => {
  const iA = a || rand(10000);

  return ({
    question: `${iA}`,
    result: `${balance(iA)}`,
  });
};

const play = () => {
  startGame(make, description);
};

export default play;
