const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:69876987Tcc@cluster0-sygd6.mongodb.net/biblioteca?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json()); 
app.use(routes);

app.listen(3333);

//Em todos os arquivos não é nescessário ; mas colocar.
