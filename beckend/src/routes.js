const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/users', (request,response) => {
    console.log(request.body);
    return response.json({message: 'Hello'});
});

module.exports = routes;