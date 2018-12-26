import { cons, car, cdr } from 'hexlet-pairs';

export const gameData = (task, question, answer) => cons(task, cons(question, answer));
export const getTask = gData => car(gData);
export const getQuestion = gData => car(cdr(gData));
export const getAnswer = gData => cdr(cdr(gData));
