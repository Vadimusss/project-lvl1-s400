import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const task = 'What is the result of the expression?';

const gameData = () => {
  let correctAnswer = 0;
  let question = '';

  const operandA = randomNum(1, 100);
  const operandB = randomNum(1, 100);

  switch (randomNum(1, 3)) {
    case 1:
      question = `${operandA} + ${operandB}`;
      correctAnswer = operandA + operandB;
      break;
    case 2:
      question = `${operandA} - ${operandB}`;
      correctAnswer = operandA - operandB;
      break;
    default:
      question = `${operandA} * ${operandB}`;
      correctAnswer = operandA * operandB;
  }

  return cons(question, String(correctAnswer));
};

export default () => {
  startGame(task, gameData);
};
