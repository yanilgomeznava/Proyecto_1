const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var path = require('path');
const Materia = require('../models/materia.model');
const Foro = require('../models/foro.model');
const Grupo = require('../models/grupo.model');
const Mensajeria= require('../models/mensajeria.model');
const Universidad = require('../models/universidad.model');
const Usuario = require('../models/usuario.model');
var passport = require('passport');

const db = "mongodb://admin:1234@ds261828.mlab.com:61828/bdtarea";
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});



router.get('/materias', function(req, res){
    console.log('Get request for all materias');
    Materia.find({})
    .exec(function(err, materias){
    	
        if (err){
            console.log("Error retrieving materias");
        }else {
            res.json(materias);
        }
    });
});

router.get('/materias/:id', function(req, res){
    console.log('Get request for a unica materia');
    Materia.findById(req.params.id)
    .exec(function(err, materia){
        if (err){
            console.log("Error retrieving materia");
        }else {
            res.json(materia);
        }
    });
});


router.post('/materia', function(req, res){
    console.log('Post materia');
    var newMateria = new Materia();
    newMateria.nombreMateria = req.body.nombreMateria;
    newMateria.codigoMateria = req.body.codigoMateria;
    newMateria.nombreMalla = req.body.nombreMalla;
    newMateria.tituloTema = req.body.tituloTema;
    newMateria.tituloSubtema = req.body.tituloSubtema;

    newMateria.save(function(err, insertedMateria){
        if (err){
            console.log('Error al guardar materia');
        }else{
            res.json(insertedMateria);
        }
    });
});

router.put('/materia/:id', function(req, res){
    console.log('Actualizar materia');
    Materia.findByIdAndUpdate(req.params.id,
    {
        $set: {nombreMateria: req.body.nombreMateria, codigoMateria: req.body.codigoMateria, nombreMalla: req.body.nombreMalla,
            tituloTema: req.body.tituloTema,tituloSubtema: req.body.tituloSubtema}
    },
    {
        new: true
    },
    function(err, updatedMateria){
        if(err){
            res.send("Error al actualizar materia");
        }else{
            res.json(updatedMateria);
        }
    }

    );
});

router.delete('/materia/:id', function(req, res){
    console.log('Deleting a materia');
    Materia.findByIdAndRemove(req.params.id, function(err, deletedMateria){
        if(err){
            res.send("Error deleting materia");
        }else{
            res.json(deletedMateria);
        }
    });
});



//------------FORO------------


router.get('/foros', function(req, res){
    console.log('Get request for all foros');
    Foro.find({})
    .exec(function(err, foros){
    	
        if (err){
            console.log("Error retrieving foros");
        }else {
            res.json(foros);
        }
    });
});

router.get('/foros/:id', function(req, res){
    console.log('Get request for a unico foro');
    Foro.findById(req.params.id)
    .exec(function(err, foro){
        if (err){
            console.log("Error retrieving foro");
        }else {
            res.json(foro);
        }
    });
});


router.post('/foro', function(req, res){
    console.log('Post foro');
    var newForo = new Materia();
    newForo.grupo = req.body.grupo;
    newForo.temaTitulo = req.body.temaTitulo;
    newForo.post = req.body.post;
    newForo.tituloPost = req.body.tituloPost;
    newForo.texto = req.body.texto;
    newForo.autor = req.body.autor;

    newForo.save(function(err, insertedForo){
        if (err){
            console.log('Error al guardar foro');
        }else{
            res.json(insertedForo);
        }
    });
});

router.put('/foro/:id', function(req, res){
    console.log('Actualizar foro');
    Foro.findByIdAndUpdate(req.params.id,
    {
        $set: {grupo: req.body.grupo, temaTitulo: req.body.temaTitulo, post: req.body.post, tituloPost: req.body.tituloPost,
            texto: req.body.texto,autor: req.body.autor}
    },
    {
        new: true
    },
    function(err, updatedForo){
        if(err){
            res.send("Error al actualizar foro");
        }else{
            res.json(updatedForo);
        }
    }

    );
});

router.delete('/foro/:id', function(req, res){
    console.log('Deleting foro');
    Foro.findByIdAndRemove(req.params.id, function(err, deletedForo){
        if(err){
            res.send("Error deleting foro");
        }else{
            res.json(deletedForo);
        }
    });
});


//-------------GRUPO------------
router.get('/grupos', function(req, res){
    console.log('Get request for all grupos');
    Grupo.find({})
    .exec(function(err, grupos){
    	
        if (err){
            console.log("Error retrieving grupos");
        }else {
            res.json(grupos);
        }
    });
});

router.get('/grupos/:id', function(req, res){
    console.log('Get request for a unico grupo');
    Grupo.findById(req.params.id)
    .exec(function(err, grupo){
        if (err){
            console.log("Error retrieving grupo");
        }else {
            res.json(grupo);
        }
    });
});


router.post('/grupo', function(req, res){
    console.log('Post grupo');
    var newGrupo = new Grupo();
    newGrupo.materia = req.body.materia;
    newGrupo.profesor = req.body.profesor;
    newGrupo.aula = req.body.aula;
    newGrupo.periodo = req.body.periodo;
    newGrupo.anno = req.body.anno;
    newGrupo.estudiantesInscritos = req.body.estudiantesInscritos;
    newGrupo.horario = req.body.horario;
    newGrupo.dia = req.body.dia;
    newGrupo.evaluacion = req.body.evaluacion;
    newGrupo.titulo = req.body.titulo;
    newGrupo.tipo = req.body.tipo;
    newGrupo.porcentaje = req.body.porcentaje;
    newGrupo.fechaEntrega = req.body.fechaEntrega;
    newGrupo.notas = req.body.notas;
    newGrupo.estudiante = req.body.estudiante;
    newGrupo.nota = req.body.nota;
    newGrupo.asistencia = req.body.asistencia;
    newGrupo.fecha = req.body.fecha;
    newGrupo.asistentes = req.body.asistentes;

    newGrupo.save(function(err, insertedGrupo){
        if (err){
            console.log('Error al guardar grupo');
        }else{
            res.json(insertedGrupo);
        }
    });
});

router.put('/grupo/:id', function(req, res){
    console.log('Actualizar grupo');
    Grupo.findByIdAndUpdate(req.params.id,
    {
        $set: {materia: req.body.materia, profesor: req.body.profesor, aula: req.body.aula,
            periodo: req.body.periodo, anno: req.body.anno, estudiantesInscritos: req.body.estudiantesInscritos, 
            horario: req.body.horario, dia: req.body.dia,
            evaluacion: req.body.evaluacion, titulo: req.body.titulo, tipo: req.body.tipo, porcentaje: req.body.porcentaje, 
            fechaEntrega: req.body.fechaEntrega,
            notas: req.body.notas, estudiante: req.body.estudiante, nota: req.body.nota, 
            asistencia: req.body.asistencia, fecha: req.body.fecha,
            asistentes: req.body.asistentes}
    },
    {
        new: true
    },
    function(err, updatedGrupo){
        if(err){
            res.send("Error al actualizar grupo");
        }else{
            res.json(updatedGrupo);
        }
    }

    );
});

router.delete('/grupo/:id', function(req, res){
    console.log('Deleting grupo');
    Grupo.findByIdAndRemove(req.params.id, function(err, deletedGrupo){
        if(err){
            res.send("Error deleting grupo");
        }else{
            res.json(deletedGrupo);
        }
    });
});

//-------------MENSAJERIA------

router.get('/mensajerias', function(req, res){
    console.log('Get request for all mensajerias');
    Mensajeria.find({})
    .exec(function(err, mensajerias){
    	
        if (err){
            console.log("Error retrieving mensajerias");
        }else {
            res.json(mensajerias);
        }
    });
});

router.get('/mensajerias/:id', function(req, res){
    console.log('Get request for a unica mensajeria');
    Mensajeria.findById(req.params.id)
    .exec(function(err, mensajeria){
        if (err){
            console.log("Error retrieving mensajeria");
        }else {
            res.json(mensajeria);
        }
    });
});


router.post('/mensajeria', function(req, res){
    console.log('Post mensajeria');
    var newMensajeria = new Mensajeria();
    newMensajeria.emisor = req.body.emisor;
    newMensajeria.receptor = req.body.receptor;
    newMensajeria.visto = req.body.visto;
    newMensajeria.mensaje = req.body.mensaje;
    newMensajeria.fechaHora = req.body.fechaHora;
   

    newMensajeria.save(function(err, insertedMensajeria){
        if (err){
            console.log('Error al guardar mensaje');
        }else{
            res.json(insertedMensajeria);
        }
    });
});

router.put('/mensajeria/:id', function(req, res){
    console.log('Actualizar mensajeria');
    Mensajeria.findByIdAndUpdate(req.params.id,
    {
        $set: {emisor: req.body.emisor, receptor: req.body.receptor, visto: req.body.visto,
            mensaje: req.body.mensaje, fechaHora: req.body.fechaHora}
    },
    {
        new: true
    },
    function(err, updatedMensajeria){
        if(err){
            res.send("Error al actualizar mensajeria");
        }else{
            res.json(updatedMensajeria);
        }
    }

    );
});

router.delete('/mensajeria/:id', function(req, res){
    console.log('Deleting mensajeria');
    Mensajeria.findByIdAndRemove(req.params.id, function(err, deletedMensajeria){
        if(err){
            res.send("Error deleting mensajeria");
        }else{
            res.json(deletedMensajeria);
        }
    });
});

//---------UNIVERSIDAD------


router.get('/universidades', function(req, res){
    console.log('Get request for all universidades');
    Universidad.find({})
    .exec(function(err, universidades){
    	
        if (err){
            console.log("Error retrieving universidades");
        }else {
            res.json(universidades);
        }
    });
});

router.get('/universidades/:id', function(req, res){
    console.log('Get request for a unica universidad');
    Universidad.findById(req.params.id)
    .exec(function(err, universidad){
        if (err){
            console.log("Error retrieving universidad");
        }else {
            res.json(universidad);
        }
    });
});


router.post('/universidad', function(req, res){
    console.log('Post universidad');
    var newUniversidad = new Universidad();
    newUniversidad.nombreUniversidad = req.body.nombreUniversidad;
    newUniversidad.paisUniversidad = req.body.paisUniversidad;
    newUniversidad.escuela = req.body.escuela;
    newUniversidad.programa = req.body.programas;
    newUniversidad.nombrePrograma = req.body.nombrePrograma;
    newUniversidad.mallas = req.body.mallas;
    newUniversidad.nombreMalla = req.body.nombreMalla;
    newUniversidad.materias = req.body.materias;
    
   

    newUniversidad.save(function(err, insertedUniversidad){
        if (err){
            console.log('Error al guardar universidad');
        }else{
            res.json(insertedUniversidad);
        }
    });
});

router.put('/universidad/:id', function(req, res){
    console.log('Actualizar universidad');
    Universidad.findByIdAndUpdate(req.params.id,
    {
        $set: {nombreUniversidad: req.body.nombreUniversidad, paisUniversidad: req.body.paisUniversidad, 
            escuela: req.body.escuela, programa: req.body.programa, nombrePrograma: req.body.nombrePrograma,
            mallas: req.body.mallas, nombreMalla: req.body.nombreMalla, 
            materias: req.body.materias}
    },
    {
        new: true
    },
    function(err, updatedUniversidad){
        if(err){
            res.send("Error al actualizar universidad");
        }else{
            res.json(updatedUniversidad);
        }
    }

    );
});

router.delete('/universidad/:id', function(req, res){
    console.log('Deleting universidad');
    Universidad.findByIdAndRemove(req.params.id, function(err, deletedUniversidad){
        if(err){
            res.send("Error deleting universidad");
        }else{
            res.json(deletedUniversidad);
        }
    });
});

//---------USUARIO------


module.exports = router; 