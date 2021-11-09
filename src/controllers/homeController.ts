import {Request, Response} from 'express';
//Models
import { Product } from '../models/Product';

export const index = (req: Request, res: Response)=>{
    res.render('pages/home');
}
