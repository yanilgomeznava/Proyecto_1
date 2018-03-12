const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grupoSchema = new Schema({
    materia: {type:Schema.Types.ObjectId, ref:'materia'},
    profesor: {type:Schema.Types.ObjectId, ref:'usuario'},
    aula: String,
    periodo: Number,
    anno: Number,
    estudiantesInscritos: [{type:Schema.Types.ObjectId, ref:'usuario'}],
    horario: [{
        dia: [String]
    }],
    evaluacion: [{
        titulo: String,
        tipo: String,
        porcentaje: Number,
        fechaEntrega: Date,
        notas: [{
           estudiante: {type: Schema.Types.ObjectId, ref:'usuario'},
           nota: Number,
        }]
    }],
    asistencia: [{
        fecha: [Date],
        asistentes: [{type: Schema.Types.ObjectId, ref:'usuario'}],
    }]


});

module.exports = mongoose.model('grupo', grupoSchema, 'grupos');

