const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Materia = require('../models/materia.model');

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
    console.log('Post universidad');
    var newUniversidad = new Universidad();
    newUniversidad.nombre = req.body.nombre;
    newUniversidad.pais = req.body.pais;
    newUniversidad.ciudad = req.body.ciudad;
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
        $set: {nombre: req.body.nombre, pais: req.body.pais, ciudad: req.body.ciudad}
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
    console.log('Deleting a universidad');
    Universidad.findByIdAndRemove(req.params.id, function(err, deletedUniversidad){
        if(err){
            res.send("Error deleting universidad");
        }else{
            res.json(deletedUniversidad);
        }
    });
});
module.exports = router; 