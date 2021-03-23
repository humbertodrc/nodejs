const express = require('express');
const router =  express.Router();

router.get('/', (req, res) => {
    res.render("index", { titulo: "Mi titulo Dinamico" })
});

router.get('/servicios', (req, res) => {
    res.render("servicios", { tituloServicios: "Pagina de Servicios Dinamica" })
});

router.get('/template/mascotas', (req, res) => {
    res.render("mascotas", { tituloServicios: "Pagina de Mascotas" })
});

module.exports = router;

