const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foroSchema = new Schema({
    grupo:{type: Schema.Types.ObjectId, ref:'grupo'},
    tema:[{
        tituloTema: String,
        post:[{
            tituloPost: String,
            texto: String,
            autor: {type: Schema.Types.ObjectId, ref:'usuario'},
        }]
    }]

  
});

module.exports = mongoose.model('foro', foroSchema, 'foros');