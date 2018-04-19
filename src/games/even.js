import rand from '../functions/rand';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const make = (a) => {
  const iA = a || rand();

  return {
    question: `${iA}`,
    result: iA % 2 === 0 ? 'yes' : 'no',
  };
};

const play = () => {
  startGame(make, description);
};

export default play;
