import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const gameData = () => {
  const question = randomNum(1, 100);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => {
  startGame(task, gameData);
};
