//Importa express
const express = require('express');
//Obtiene el Router de express
const routes = express.Router();

module.exports = () => {

    routes.get('/', (req, res) => {
        res.render('inicio');
    });
    routes.get('/nosotros', (req, res) => {
        res.render('nosotros');
    });
    return routes;   
}