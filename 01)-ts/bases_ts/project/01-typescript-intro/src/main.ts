import './style.css'
//import './topics/01-basic-types'
//import './topics/02-object-interface';
//import './topics/03-functions-and-interface';
//import './topics/04-homework-types';
//import './topics/05-basic-destructuring'
//import './topics/06-fuction-destructuring';
//import './topics/07-import-export';
//import './topics/08-classes';
//import './topics/08-classes-composicion'
import './topics/09-generics';
//import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app');
app!.innerHTML = `
Hola typeScript
`;

console.log('main is run');
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
