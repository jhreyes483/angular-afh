export class Person {

    constructor(
        public name : string,
        public address : string = 'No address',
    ){

    }
}

export class Hero extends Person {
    constructor(
        public alterEgo : string,
        public age: number,
        public realName: string
    ){
        super(realName,'New York');
    }
}

const ironmain = new Hero('Iron',45,'Tony')
console.log(ironmain);