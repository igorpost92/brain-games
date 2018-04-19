import rand from '../functions/rand';
import startGame from '..';

const description = 'What number is missing in this progression?';

const makeProgression = (start, interval, missingIndex) => {
  const count = 10;
  const arr = [];
  for (let i = 0; i < count; i += 1) {
    arr.push(start + (interval * i));
  }

  const missing = arr[missingIndex];
  arr[missingIndex] = '..';

  return [arr, missing];
};

const make = (start, interval, mis) => {
  const iStart = start || rand(100);
  const iInter = interval || rand(100);
  const iMis = mis || rand(100);

  const [arr, missing] = makeProgression(iStart, iInter, iMis);

  return {
    question: `${arr.join(' ')}`,
    result: `${missing}`,
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
