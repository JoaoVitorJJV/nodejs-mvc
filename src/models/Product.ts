type Product = {
    title: string,
    price: number
}

const data: Product[] = [
    {title: 'Maçã', price: 2.00},
    {title: 'Banana', price: 2.00},
    {title: 'Laysa Cristina', price: 2.00},
    {title: 'Lasanha', price: 6.00},
    {title: 'Batata', price: 7.00}
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },

    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
}