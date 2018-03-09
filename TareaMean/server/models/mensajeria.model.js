const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mensajeriaSchema = new Schema({
    emisor = {type: Schema.Types.ObjectId, ref:'usuario'},
    receptor = {type: Schema.Types.ObjectId, ref:'usuario'},
    visto = true,
    mensaje = String,
    fechaHora = [Date],

  
});

module.exports = mongoose.model('mensajeria', mensajeriaSchema, 'mensajerias');
