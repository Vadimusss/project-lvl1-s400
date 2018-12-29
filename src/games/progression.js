import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const task = 'What number is missing in the progression?';
const length = 10;

const gameData = () => {
  let question = '';

  const firstNumber = randomNum(1, 10);
  const progressionStep = randomNum(1, 10);
  const hiddenNumberPosition = randomNum(0, length - 1);
  const correctAnswer = firstNumber + progressionStep * hiddenNumberPosition;

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenNumberPosition) {
      question += ' ..';
    } else {
      question = `${question} ${firstNumber + progressionStep * i}`;
    }
  }

  return cons(question.trim(), String(correctAnswer));
};

export default () => {
  startGame(task, gameData);
};
