import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const gameData = () => {
    const question = randomNum(1, 100);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };

  startGame(task, gameData);
};
