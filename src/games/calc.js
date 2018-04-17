import rand from '../functions/rand';

const operations = [
  { name: '+', ev: (a, b) => a + b },
  { name: '-', ev: (a, b) => a - b },
  { name: '*', ev: (a, b) => a * b },
];

const make = (a = rand(11), b = rand(11), op = operations[rand(3)]) => ({
  description: 'What is the result of the expression?',
  question: () => `${a} ${op.name} ${b}`,
  result: () => `${op.ev(a, b)}`,
});

export default make;
