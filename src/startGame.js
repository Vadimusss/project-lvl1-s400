import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { askName, greeting } from './utils';

export default (task, countOfQuestions, gameData) => {
  greeting(task);
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
