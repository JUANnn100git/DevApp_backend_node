require('./config/config');

const express = require('express');
const app = express();

app.get('/paises', function(req, res) {
    res.json('Get Paises');
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

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});