const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  usuarioName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  pass:{
    type: String,
    required: true
  },
  usuarioApellidos: {
    type: String,
    required: true
  },
  usuarioCarne: {
    type: String,
    required: true
  },
  nombreMalla: [String],
  esProfesor: {
    type: Boolean,
    required: true
  },
  grupos: [{type:Schema.Types.ObjectId, ref:'grupo'}]
});

module.exports = mongoose.model('usuario', usuarioSchema, 'usuarios');