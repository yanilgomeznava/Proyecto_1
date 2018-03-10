const mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  usuarioName: {
    type: String,
  //  required: true
  },
  userName: {
    type: String,
  //  required: true
  },
  pass:{
    type: String,
  //  required: true
  },
  usuarioApellidos: {
    type: String,
  //  required: true
  },
  usuarioCarne: {
    type: String,
  //  required: true
  },
  nombreMalla: [String],
  esProfesor: {
    type: Boolean,
  //  required: true
  },
  grupos: [{type:Schema.Types.ObjectId, ref:'grupo'}]
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