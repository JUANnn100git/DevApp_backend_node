require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/paises', function(req, res) {
    res.json('Get Paises Local');
});

app.post('/paises', function(req, res) {
    res.json('Post Paises');
});

app.put('/paises', function(req, res) {
    res.json('Put Paises');
});

app.delete('/paises', function(req, res) {
    res.json('Delete Paises');
});

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de Datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});