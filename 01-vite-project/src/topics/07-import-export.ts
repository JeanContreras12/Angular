import { Product, taxCalculation, tax as taxShoppingCart } from "./06-functions-destructions";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 200
    },

];

const [ total, tax] = taxCalculation({
    products: shoppingCart,
    tax: taxShoppingCart,
});

console.log('Total', total);
console.log('Tax', tax);