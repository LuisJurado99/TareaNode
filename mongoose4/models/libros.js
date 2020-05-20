var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tu código aquí
mongoose.set('useFindAndModify', true);
var LibroSchema = Schema({
    _id: String,
    titulo: String,
    autor:{
        nombre: String,
        materno: String,
        paterno: String
    },
    anio_publicacion: Date,
    editorial: String
});
module.exports = mongoose.model('Libro', LibroSchema);