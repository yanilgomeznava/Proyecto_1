const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const universidadSchema = new Schema({
  nombreUniversidad: {
    type: String,
    required: true
  },
  paisUniversidad: {
    type: String,
    required: true
  },
  escuela:[{
    nombreEscuela: String,
    programas: [{
      nombrePrograma: String,
      mallas = [{
        nombreMalla: String,
        materias:[{type: Schema.Types.ObjectId, ref:'materia'}] 
      }],

    }],

  }]
  
});

module.exports = mongoose.model('universidad', universidadSchema, 'universidades');