
/** 29 Genericos   (identifican un tipo de dato cualquiera y permitoe definir desde el uso de la funcion) */

export function whatsMyType <T>( argument: T) : T{
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amNumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amNumber.toFixed());
console.log(amIArray.join('-'));

// QUEDE EN 30 DECORADORES 
