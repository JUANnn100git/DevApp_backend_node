const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Probando Servicio Server');
});

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});