const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const escuelaSchema = new Schema({
    nombreEscuela: String,
    universidad:{type:Schema.Types.ObjectId, ref:'universidad'},
    programa: [{
      nombrePrograma: String,
      mallas: [{
        nombreMalla: String,
        materias:[{type: Schema.Types.ObjectId, ref:'materia'}] 
      }],

    }],
  
  
});

module.exports = mongoose.model('escuela', escuelaSchema, 'escuelas');

