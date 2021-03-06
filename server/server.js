require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// habilitar cors
app.use(cors({
    origin: ['https://devapp-frontend-angular-cloud.firebaseapp.com', 'http://localhost:4200'],
    methods: ['GET'],
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
}));

app.use(require('./routes/pais'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de Datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});