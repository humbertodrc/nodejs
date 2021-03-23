// base para construir la ruta
const express = require('express');
const router = express.Router();
// base para construir la ruta

// exportar el modelo de Mascotas
const Mascotas = require('../models/mascota')

router.get('/', async(req, res) => {

    try {
        
        // con esta constante mongoose nos va a traer toda nuestra coleccion
        const arrayMascotasDB = await Mascotas.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
    }

})



module.exports = router;
