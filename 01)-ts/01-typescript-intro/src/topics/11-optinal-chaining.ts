interface Passenger {
    name: string;
    children?: string[];
}


const paenger1: Passenger = {
    name: 'Javier',
}

const paenger2: Passenger = {
    name: 'Brian',
    children: ['Natalia', 'Elizabeth']
}

/**
 * ejemplo de parametro opcional
 * @param passenger 
 */
const printChildren = (passenger: Passenger) => {
    const howmanyChildren = passenger.children?.length || 0;
    console.log(howmanyChildren)
}


/**
 * ejmeplo de parametro que siempre existe
 * @param passenger 
 * @returns 
 */
const returnChildren = (passenger: Passenger) => {
    if(!passenger.children) return 0;
    const howmanyChildren = passenger.children!.length || 0;
    console.log(howmanyChildren)
    return howmanyChildren;
}

printChildren(paenger1);