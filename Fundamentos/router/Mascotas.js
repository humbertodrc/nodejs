// base para construir la ruta
const express = require('express');
const Mascota = require('../models/mascota');
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


router.get('/crear', (req, res) => {
    res.render('crear')
})

// Para recibir informacion de nuestro sitio Web
router.post('/', async(req, res) => {
    const body = req.body
    // console.log(body)
    try {
        const mascotaDB = new Mascota(body)
        // con esto guardamos en mongo db
        await mascotaDB.save()
        // console.log('Mascota Creada: ', mascotaDB)

        // ------------------------------------------------------------------
        // otra forma de crear nuestra mascota y guardarla en la base de datos
        // await Mascotas.create(body)
        // --------------------------------------------------------------------

        // utilizamos redirect para empujar al usuario a la ruta que necesitemos
        res.redirect('/mascotas')


    } catch (error) {
        console.log(error)
    }
})

// -------------------------------leer un  unico documento va a detalle.js------------------------------------

router.get('/:id', async (req, res) => {

    // creamos la contante ID que se va a leer atraves del params.
    const id = req.params.id
    // con esto vamos a estar leyendo la url (asi podemos buscar un unico documento)

    try {

        // esto va a esperar a nuestro modelo Mascota (va a buscar el primer documwnto que coincida con ese ID)
        const mascotasDB = await Mascotas.findOne({ _id: id })
        console.log(mascotasDB)

        // para pintar todo el objeto que nos traemos con el ID en una vista correspondiente
        res.render('detalle', {
            mascota: mascotasDB,
            error: false
        })

        
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el ID seleccionado'
        })
    }
})


// --------------------------------configurar la ruta que va a eliminar el documento------------------------------

// delete es otro verbo de http que nos permite eliminar

router.delete('/:id', async(req, res) => {
    // creamos la contante ID que se va a leer atraves del params.
    const id = req.params.id
    // con esto vamos a estar leyendo la url (asi podemos buscar un unico documento)

    try {
        // aca vamos a eliminar un docuemnto que tenga un ID especifico
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id })

        // en caso de que mascotaDB exista procesamos una respuesta con if o error con else
        if (mascotaDB) {  
        // aca hacemos la respuesta con un json
        res.json({
            estado: true,
            mensaje: 'Eliminado!'
        })

        } else {
        res.json({
        estado: false,
        mensaje: 'Fallo Eliminar'
        })
    }
        
    } catch (error) {
        console.log(error)
    }







})

module.exports = router;
