#!/usr/bin/env node
import { question } from 'readline-sync';
import welcome from '..';

const rand = (max = 1000) => Math.floor(Math.random() * max);

const options = { yes: 1, no: 0 };

const ask = (left) => {
  if (left === 0) {
    return 0;
  }
  const num = rand();
  const isEven = Number(num % 2 === 0);

  console.log(`Question: ${num}`);
  const answer = question('Your answer: ').toLowerCase();
  const res = options[answer];
  console.log(isEven === res ? 'Correct!' : 'Wrong!');

  return ask(left - 1) + (isEven === res ? 1 : 0);
};

const start = (times = 3) => {
  const correctAnswers = ask(times);
  if (correctAnswers === times) {
    console.log('Congratulations!');
  } else if (correctAnswers > 0) {
    console.log(`You gave only ${correctAnswers} correct answers.`);
  } else {
    console.log('You lost');
  }
};

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
welcome();
start();
