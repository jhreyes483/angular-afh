import { Product, taxCalculation } from './06-fuction-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 1000
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log({total, tax})