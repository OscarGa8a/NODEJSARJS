//Importa express
const express = require('express');
//Importamos libreria para manejar rutas
const path = require('path');
//Importa variables de entorno
require('dotenv').config({path: 'variables.env'});
//Importa el router configurado
const routes = require('./routes');

//Crea el servidor
const app = express();

//Habilita pug
app.set('view engine', 'pug');
//Inserta la ruta de las views
app.set('views', path.join(__dirname, './views'));

//Carga las rutas
app.use('/', routes());

//Asigna host
const host = process.env.HOST || '0.0.0.0';
//Asigna puerto
const port = process.env.PORT || 3000;

//Arranca el servidor
app.listen(port, host, () => {
    console.log(`Servidor Iniciado en ${host} : ${port}`);
});