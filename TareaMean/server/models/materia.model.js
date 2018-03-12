const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materiaSchema = new Schema({
    nombreMateria: {
      type: String,
      required: true
    },
    codigoMateria: {
      type: String,
      required: true
    },
    nombreMalla: [String],
    temasMateria:[{
      tituloTema: String,
      tituloSubtema: [String]
      }]

    }
    
  );

  module.exports = mongoose.model('materia', materiaSchema, 'materias');