export class Person {

    constructor(
        public name : string,
        public address : string = 'No address',
    ){

    }
}

export class Hero  {
    constructor(
        public alterEgo : string,
        public age: number,
        public realName: string,
        public person : Person
    ){
       // super(realName,'New York');
    }
}


const tony = new Person('Tony Stark', 'New York');
const ironmain = new Hero('ironman', 45,'Tony', tony);
console.log(ironmain);