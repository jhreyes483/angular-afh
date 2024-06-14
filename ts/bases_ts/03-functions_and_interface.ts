function addNumbers( a:number, b:number ){
    return a + b;
}

/** funcion como constante  */
const addNumbersArrow = (a:number, b:number) : string =>{
    return `${a + b}`;
}

function multiply(firtNumber: number, secondNumber?: number, base: number = 2){
    return firtNumber * base;
}


interface Character {
    name : string;
    hp: number;
    showHp: ()=> void;
}


const strider: Character = {
    name : 'Strider',
    hp: 50,
    showHp(){
        console.log('ddd')
    }
}

const heal = (character : Character, amount) =>{
    character.name : String;
    character.

}

const result : number = addNumbers(1,2);
const result2 : string = addNumbersArrow(1,2);
const result3 : number = multiply(5);

export {};