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
  
  
});

module.exports = mongoose.model('universidad', universidadSchema, 'universidades');