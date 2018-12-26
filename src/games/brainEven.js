import { gameData } from '../gameData';
import isEven from '../isEven';

export default () => {
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const question = Math.round(Math.random() * 100);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';

  return gameData(task, question, correctAnswer);
};
