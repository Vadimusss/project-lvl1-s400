import { cons } from 'hexlet-pairs';
import { randomNum } from '../utils';
import startGame from '../startGame';

const isEven = num => num % 2 === 0;

const task = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const gameData = () => {
    const question = randomNum(1, 100);
    const correctAnswer = (isEven(question)) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };

  startGame(task, gameData);
};
