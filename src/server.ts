import express, {Request, Response} from 'express'; // Importação do servidor com os types Request e Responde
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import dotenv from 'dotenv';

//Pegando o arquivo de configuração .env
dotenv.config();

const server = express(); // Putting the server in a variable

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Receive detailed requisition data (must be before routes)
server.use(express.urlencoded({extended: true}));

// Using route files
server.use(mainRoutes); 


//Page 404
server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT); //Starting the server on the specified port, use 80 or 3000