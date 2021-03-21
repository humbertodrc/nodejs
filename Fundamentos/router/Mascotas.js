// base para construir la ruta
const express = require('express');
const router = express.Router();
// base para construir la ruta

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'jdjdjdj', nombre: 'rex', descripcion: 'rex descripcion'},
            {id: 'jdjdjff', nombre: 'chan', descripcion: 'rex chan'},
            
        ]
    })
})



module.exports = router;
