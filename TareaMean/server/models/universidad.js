const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const universidadSchema = new Schema({
    nombre: String,
    pais: String,
    ciudad: String
});

module.exports = mongoose.model('universidad', universidadSchema, 'universidades');