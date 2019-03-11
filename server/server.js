require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(require('./routes/paises'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de Datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});