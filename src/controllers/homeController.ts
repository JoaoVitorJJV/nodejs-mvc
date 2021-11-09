import {Request, Response} from 'express';
//Models
import { Product } from '../models/Product';

export const index = (req: Request, res: Response)=>{
    let idade: number = 18;
    let mensagemIdade: boolean = false;
    let getProductAfter = false;

    if(idade >= 18){
        mensagemIdade = true;
    }

    let list = Product.getAll();
    let expressionList = Product.getFromPriceAfter(5);

    if(expressionList){
        getProductAfter = true;
    }

    res.render('pages/home', {
        nome : 'João Vitor',
        mensagemIdade,
        verificacaoPreco: getProductAfter,
        expressionList,
        produtos: list,
        frases: [
          ['The day it's beautfuil]
        ]
        
    });
}