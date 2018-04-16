import { question } from 'readline-sync';

const welcome = () => {
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default welcome;
