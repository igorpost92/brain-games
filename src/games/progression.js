import rand from '../functions/rand';
import startGame from '..';

const description = 'What number is missing in this progression?';

const makeProgression = (start = rand(100), interval = rand(10)) => {
  const count = 10;
  const arr = [];
  for (let i = 0; i < count; i += 1) {
    arr.push(start + (interval * i));
  }

  const missingIndex = rand(count);
  const missing = arr[missingIndex];
  arr[missingIndex] = '..';

  return [arr, missing];
};

const make = (a = makeProgression()) => {
  const [arr, missing] = a;

  return {
    question: `${arr.join(' ')}`,
    result: `${missing}`,
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
