const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

//Importar cada rota para cada item que for usado abaixo

const routes = Router();

//Criar uma rota para cada item (CRUD)

routes.get('/devs', DevController.index);
routes.post('/devs',  DevController.store);

routes.get('/search', SearchController.index);



module.exports = routes;