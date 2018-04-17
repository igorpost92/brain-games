import rand from '../functions/rand';

const make = (a = rand()) => ({
  description: 'Answer "yes" if number even otherwise answer "no".',
  question: () => `${a}`,
  result: () => (a % 2 === 0 ? 'yes' : 'no'),
});

export default make;
