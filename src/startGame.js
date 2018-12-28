import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { askName } from './utils';

const countOfQuestions = 3;

export default (task, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  console.log('');

  const name = askName();

  for (let i = 0; i < countOfQuestions; i += 1) {
    const rules = gameData();
    const question = car(rules);
    const correctAnswer = cdr(rules);

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
