import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const task = 'What number is missing in the progression?';

export default () => {
  const gameData = () => {
    let question = '';
    let currentNumber = randomNum(1, 100);

    const progressionStep = randomNum(1, 10);
    const length = 10;
    const hiddenNumberPosition = randomNum(0, 9);
    const correctAnswer = currentNumber + progressionStep * hiddenNumberPosition;

    for (let i = 0; i < length; i += 1) {
      if (i === hiddenNumberPosition) {
        question += ' ..';
      } else {
        question = `${question} ${currentNumber}`;
      }
      currentNumber += progressionStep;
    }

    return cons(question, String(correctAnswer));
  };

  startGame(task, gameData);
};
