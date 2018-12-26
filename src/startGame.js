import readlineSync from 'readline-sync';
import askName from './askName';
import greeting from './greeting';
import { getTask, getQuestion, getAnswer } from './gameData';

export default (game) => {
  greeting(getTask(game()));
  const name = askName();
  const countOfQuestions = 3;

  for (let i = 0; i < countOfQuestions; i += 1) {
    const gameData = game();
    const question = getQuestion(gameData);
    const answer = getAnswer(gameData);

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer.toLowerCase() !== answer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
