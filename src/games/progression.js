import { rand } from '../utils';
import startGame from '..';

const description = 'What number is missing in this progression?';

const makeProgression = (start, interval, missingIndex) => {
  const len = 10;
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(start + (interval * i));
  }

  const missing = arr[missingIndex];
  arr[missingIndex] = '..';

  return [arr, missing];
};

const make = () => {
  const start = rand(100);
  const interval = rand(100);
  const missingIndex = rand(100);

  const [arr, missing] = makeProgression(start, interval, missingIndex);

  return {
    question: `${arr.join(' ')}`,
    result: `${missing}`,
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
