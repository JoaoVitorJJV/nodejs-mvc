import { Router } from "express";
//Controllers
import * as HomeController from '../controllers/homeController';


const router = Router();

//Routes
router.get('/', HomeController.index);

export default router;