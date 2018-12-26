import { gameData } from '../gameData';

export default () => {
  let operator = '';
  let correctAnswer = '';
  const task = 'What is the result of the expression?';
  const random = Math.random();
  const operandA = Math.round(Math.random() * 100);
  const operandB = Math.round(Math.random() * 100);

  if (random < 0.33) {
    operator = '+';
  } else if (random > 0.66) {
    operator = '-';
  } else {
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

  return gameData(task, question, String(correctAnswer));
};
