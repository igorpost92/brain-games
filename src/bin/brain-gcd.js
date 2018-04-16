#!/usr/bin/env node
import GCD, { gameDescription } from '../games/gcd';
import Manager from '../games/manager';
import welcome from '..';

console.log('Welcome to the Brain Games!');
console.log(gameDescription);
const name = welcome();
const man = new Manager(name, new GCD());
man.startGame();
