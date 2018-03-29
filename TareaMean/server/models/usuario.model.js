const mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: {
    type: String,
   //required: true
  },
  userName: {
    type: String,
   // required: true
  },
  pass:{
    type: String,
  // required: true
  },
  email:{
    type: String,
  //  required: true
  },
  universidad: {
    type: String,
  //  required: true
  },
  carne: {
    type: String,
  //  required: true
  },
  malla: {
    type: String,
  //  required: true
  },
  esProfesor: {
    type: Boolean,
  //  required: true
  }
  
});

// generating a hash
usuarioSchema.methods.generateHash = function(pass) {
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
usuarioSchema.methods.validPassword = function(pass) {
  return bcrypt.compareSync(pass, this.pass);
};

module.exports = mongoose.model('usuario', usuarioSchema, 'usuarios');