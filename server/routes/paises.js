const express = require('express');

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

module.exports = app;