import './style.css'
import './topics/01-basic-types'
import './topics/02-object-interface';
//import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app');
app!.innerHTML = `
Hola typeScript
`;

console.log('main is run');
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
