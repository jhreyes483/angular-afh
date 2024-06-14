

export interface Product {
    description: string,
    price: number
}

// const phone: Product = {
//     description: 'Nokia a1',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250.0
// }

 interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;
    options.products.forEach( ({ price }) => {
        total += price;
    });
    return [total, total + options.tax];
}


//const shoppingCart = [phone, tablet]
// const tax = 0.15;
// const [ total, endTax ] = taxCalculation({
//     products: shoppingCart,
//     tax
// });


//console.log('Total', result[0])
//console.log('Tax', result[1])

//console.log( {total, endTax} )


