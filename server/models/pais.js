const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let paisSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'El nombre es necesario']
    },
    alpha2Code: {
        type: String,
        unique: true,
        required: [true, 'El código es necesario']
    },
    capital: {
        type: String,
        required: [true, 'La capital es necesaria']
    },
    flag: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Pais', paisSchema);