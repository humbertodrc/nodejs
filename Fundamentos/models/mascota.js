// este es el esquema o modelo (estructura)

const mongoose = require('mongoose');
// luego hacemos el esquema que va a utilizar mongoose
const Schema = mongoose.Schema;

// aca creamos la estructura 
const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
})

// crear modelo
const Mascota = mongoose.model('Mascota', mascotaSchema);

// siempre tenemos que hacer este esquema cada vez que creamos una nueva coleccion

// exportamos

module.exports = Mascota;