#!/usr/bin/env node
import Calc, { gameDescription } from '../games/calc';
import Manager from '../games/manager';
import welcome from '..';

console.log('Welcome to the Brain Games!');
console.log(gameDescription);
const name = welcome();
const man = new Manager(name, new Calc());
man.startGame();
