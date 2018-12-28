import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const task = 'What is the result of the expression?';
const countOfQuestions = 3;

export default () => {
  const gameData = () => {
    let operator = '';
    let correctAnswer = '';
    const operandA = randomNum(1, 100);
    const operandB = randomNum(1, 100);

    switch (randomNum(1, 3)) {
      case 1:
        operator = '+';
        break;
      case 2:
        operator = '-';
        break;
      default:
        operator = '*';
    }

    const question = `${operandA} ${operator} ${operandB}`;

    if (operator === '+') {
      correctAnswer = operandA + operandB;
    } else if (operator === '-') {
      correctAnswer = operandA - operandB;
    } else {
      correctAnswer = operandA * operandB;
    }

    return cons(question, String(correctAnswer));
  };

  startGame(task, countOfQuestions, gameData);
};
