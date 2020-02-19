const express = require('express');

const app = express();

//get, post, put, delete

//Tipor de parametros:

//Query Params: request.query (Filtros, Ordenação, Paginação...)
//Route Params:
//Body:

app.get('/', (request,response) => {
    console.log(request.query);
    return response.json({message: 'Hello'});
});

app.listen(3001);