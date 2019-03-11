const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


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

paisSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('Pais', paisSchema);