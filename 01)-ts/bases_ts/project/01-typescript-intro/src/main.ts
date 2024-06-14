import './style.css'
import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app');
app!.innerHTML = `
Hola type script
`;


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
