const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Universidad = require('../models/universidad');

const db = "mongodb://localhost:27017/bdTarea";
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

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
    console.log('Get request for a unico video');
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