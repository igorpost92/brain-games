import rand from '../functions/rand';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const make = (a = rand()) => ({
  question: () => `${a}`,
  result: () => (a % 2 === 0 ? 'yes' : 'no'),
});

const play = () => {
  startGame(make, description);
};

export default play;
