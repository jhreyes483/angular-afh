/**
 * 
 * @param constructor 
 *  Los decoradores suman o cambia el comportameniento de la clase que lo usa
 * 30 Deocoradores
 * @returns 
 */

function classDecorator(
    constructor: any

){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator 
class SuperClass {

    public myProperty: string = 'Abc123';


    print(){
        console.log('Hola mundo');
    }

}

const myClass = new SuperClass()

console.log(myClass)
