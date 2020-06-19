const express = require('express');
const bodyParser = require('body-parser');
const rutas = require('./routes/routes');
require('dotenv').config();

const puerto = process.env.BK_PORT || 3002;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = app.listen(puerto, error => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server jalando en el puerto: ${server.address().port}`);
})

rutas(app);