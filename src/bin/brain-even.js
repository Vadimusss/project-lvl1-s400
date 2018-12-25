#!/usr/bin/env node
import { greeting, askQuestion } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = greeting();
askQuestion(name);
