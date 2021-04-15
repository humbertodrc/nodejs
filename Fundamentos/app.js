// const {frutas, dinero} = require('./frutas');

// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U "
// 


// frutas.forEach(item => {
//     // console.log(item);
//     console.count(item);    
// });

// console.log(dinero);

// crear un servidor
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('estoy respondiendo a tu solicitud v.3')
// });

// const puerto = 3000;

// server.listen(puerto, () => {
//     console.log('escuchando solicitudes')
// });


// crear un servidor con express

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// -------------body-parser-------------

// const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// ------------variables de entrono--------------------------------->

// configurando dotenv
require('dotenv').config()

// es importante configurar el puerto de la siguiente manera:
const port = process.env.PORT || 3000;


// -----------conexion a base de datos con mongoose------------------>
const mongoose = require('mongoose');

// siempre que nos conectemos a una base de datos vamos a necesitar:
// const user = '';
// const password = '';
// const dbname = ''


//  CREAMOS LAS VARIABLES DE ENTORNO CON EL ARCHIVO .env y 'process.env.'

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.icwqg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de Datos Conectada'))
    .catch(e => console.log(e))


// -------------------------motor de plantillas------------------------>

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// --------------------------------------------------------------------->

app.use(express.static(__dirname + "/public"));


// --------------------------Rutas Web API------------------------------>

app.use('/', require('./router/RutasWeb'));

app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo de mi web 404"
    })
})

app.listen(port, () => {
    console.log(`servidor a su servicio en el puerto ${port}`)
    // console.log(__dirname);
})

