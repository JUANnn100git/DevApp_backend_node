const express = require('express');
const Pais = require('../models/pais');


const app = express();

app.get('/pais', function(req, res) {
    res.json('Get Paises Local');
});

app.post('/pais', function(req, res) {

    let body = req.body;

    let pais = new Pais({
        name: body.name,
        alpha2Code: body.alpha2Code,
        capital: body.capital,
        flag: body.flag
    });

    pais.save((err, paisDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            }); //400 Bad Request
        }

        res.json({
            ok: true,
            pais: paisDB
        });

    });

});

app.put('/pais/:id', function(req, res) {

    let id = req.params.id;
    let body = req.body;

    Pais.findByIdAndUpdate(id, (err, paisBD) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            }); //400 Bad Request
        }

        res.json({
            ok: true,
            pais: paisDB
        });
    });


});

app.delete('/pais/:id', function(req, res) {
    res.json('Delete Paises');
});

module.exports = app;