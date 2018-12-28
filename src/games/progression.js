import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const task = 'What number is missing in the progression?';
const countOfQuestions = 3;

export default () => {
  const gameData = () => {
    let correctAnswer = '';
    let question = '';
    let currentNumber = randomNum(1, 100);

    const progressionStep = randomNum(1, 10);
    const countOfNumbers = 10;
    const missingNumber = randomNum(0, 9);

    for (let i = 0; i < countOfNumbers; i += 1) {
      if (i === missingNumber) {
        question += ' ..';
        correctAnswer = currentNumber;
        currentNumber += progressionStep;
      } else {
        question = `${question} ${currentNumber}`;
        currentNumber += progressionStep;
      }
    }

    return cons(question, String(correctAnswer));
  };

  startGame(task, countOfQuestions, gameData);
};
