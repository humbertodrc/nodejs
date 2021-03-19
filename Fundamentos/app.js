// const {frutas, dinero} = require('./frutas');

// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U "
// }));


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
const app = express();

const port = 3000;

// motor de plantillas
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.render ("index", {titulo: "Mi titulo Dinamico"})
});

app.get('/servicios', (req, res) => {
    res.send('mi respuesta desde la pagina servicios')
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
    console.log(`servidor a su servicio en el puerto ${port}`)
})

