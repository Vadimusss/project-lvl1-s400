import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const gcd = (first, second) => {
  let numOne = first;
  let numTwo = second;

  if (numOne < numTwo) [numOne, numTwo] = [numTwo, numOne];

  const residue = numOne % numTwo;
  if (residue === 0) return numTwo;

  return gcd(numTwo, residue);
};

const task = 'Find the greatest common divisor of given numbers.';
const countOfQuestions = 3;

export default () => {
  const gameData = () => {
    const numberOne = randomNum(1, 1000);
    const numberTwo = randomNum(1, 1000);

    const question = `${numberOne} ${numberTwo}`;
    const correctAnswer = String(gcd(numberOne, numberTwo));

    return cons(question, String(correctAnswer));
  };

  startGame(task, countOfQuestions, gameData);
};
