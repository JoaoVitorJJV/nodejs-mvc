## Instalação
Você pode clonar este repositório OU baixar o .zip

Instalando os módulos
```sh
npm install --save-dev
```

Iniciando o servidor

```sh
npm run start-dev
```

# Configurações

Modelo de Controller
```js
import {Request, Response} from 'express';
import { Product } from '../models/Product';

export const index = (req: Request, res: Response)=>{
    res.render('pages/home');
}
```

Modelo de Model

```ts
type Product = {
    title: string,
    price: number
}

const data: Product[] = [
    {title: 'Maçã', price: 2.00},
    {title: 'Banana', price: 2.00},
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
```
Você precisa ter o `nodemon` instalado globalmente ou no projeto, caso não tenha instale utilizando prompt de comando
```sh
npm install nodemon
```

Globalmente

```sh
npm install -g nodemon
```

<hr>

English:

## Get started
You can clone this repository or download the zip file

Installing the node modules
```sh
npm install --save-dev
```

Starting the server

```sh
npm run start-dev
```

Controller
```js
import {Request, Response} from 'express';
import { Product } from '../models/Product';

export const index = (req: Request, res: Response)=>{
    res.render('pages/home');
}
```

Model 

```ts
type Product = {
    title: string,
    price: number
}

const data: Product[] = [
    {title: 'Maçã', price: 2.00},
    {title: 'Banana', price: 2.00},
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
```
You need with `nodemon` to usage this MVC, if you don't have, download globally or in this folder

In this folder
```sh
npm install nodemon
```

Globally

```sh
npm install -g nodemon
```



