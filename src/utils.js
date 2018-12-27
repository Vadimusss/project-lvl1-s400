import readlineSync from 'readline-sync';

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  console.log('');
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('');

  return name;
};

export const randomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
