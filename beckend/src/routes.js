const { Router } = require('express');

const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');

//Importar cada rota para cada item que for usado abaixo

const routes = Router();

//Criar uma rota para cada item (CRUD)

routes.get('/register', UserController.index);
routes.post('/register',  UserController.store);

routes.get('/search', SearchController.index);



module.exports = routes;