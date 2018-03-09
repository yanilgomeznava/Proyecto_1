const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grupoSchema = new Schema({
    materia = {type:Schema.Types.ObjectId, ref:'materia'},
    profesor = {type:Schema.Types.ObjectId, ref:'usuario'},
    num_grupo = [number],
    aula = String,
    periodo = [number],
    anno = [number],
    estudiantesInscritos = [{type:Schema.Types.ObjectId, ref:'usuario'}],
    horario = [{
        dia = [Date],
    }],
    evaluacion= [{
        titulo = String,
        tipo=String,
        porcentaje = [number],
        fechaEntrega = [Date],
        notas = [{
           estudiante = {type: Schema.Types.ObjectId, ref:'usuario'},
           nota = [number],
        }]
    }],
    asistencia = [{
        fecha = [date],
        asistentes = [{type: Schema.Types.ObjectId, ref:'usuario'}],
    }]


});

module.exports = mongoose.model('grupo', grupoSchema, 'grupos');

