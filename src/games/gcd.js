import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (first, second) => {
  const recursion = (greater, minor) => {
    const residue = greater % minor;

    if (residue === 0) return minor;

    return recursion(minor, residue);
  };

  return (first > second) ? recursion(first, second) : recursion(second, first);
};

const gameData = () => {
  const numberOne = randomNum(1, 1000);
  const numberTwo = randomNum(1, 1000);

  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(gcd(numberOne, numberTwo));

  return cons(question, correctAnswer);
};

export default () => {
  startGame(task, gameData);
};
