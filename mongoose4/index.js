var mongoose = require('mongoose');
var Libro = require('./models/libros.js');
const readline = require('readline');

var url="mongodb+srv://usuario1:rootroot@cluster0-qksmw.gcp.mongodb.net/pruebas?retryWrites=true&w=majority";


mongoose.connect(url, {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function nuevoLibro(){
  // tu código aquí
  var lib= Libro({
    _id:"11111111111110",
    titulo: "Ecología",
    autor:{
      nombre: "Luis",
      apellido_p: "Lopez",
      apellido_m: "Robles"
  },
  anio_publicacion: "05-07-2010",
  editorial: "Porrua"
  });
  
    lib.save(function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
        console.log(data);
      }
    });
  }
  
  function nuevosLibros() {
  
    var libros=[
      { _id: "0000000000000",titulo:"Marianela",autor: {paterno: "Gómez", materno: "López", nombre: "Alberto" }},
      { _id: "1111111111111",titulo:"Romeo y Julieta",autor: {paterno: "Shakespeare", materno: "--", nombre: "William" }},
      { _id: "2222222222222",titulo:"Los tres mosqueteros",autor: {paterno: "Estrella", materno: "Martínez", nombre: "Ricardo" }},
      { _id: "3333333333333",titulo:"Esbozo de historia universal",autor: {paterno: "Brom", materno: "--", nombre: "Juan" }},
      { _id: "4444444444444",titulo:"Historia mínima de México",autor: {paterno: "Pérez", materno: "Estrada", nombre: "Víctor" }},
      { _id: "5555555555555",titulo:"El gato con botas",autor: {paterno: "Hernandez", materno: "López", nombre: "José" }},
      { _id: "6666666666666",titulo:"El conde Lucanor",autor: {paterno: "Higareda", materno: "Trujillo", nombre: "Diego" }},
      { _id: "7777777777777",titulo:"Los topos",autor: {paterno: "Hernandez", materno: "Cabrera", nombre: "Arturo" }},
      { _id: "8888888888888",titulo:"Hamlet",autor: {paterno: "Shakespeare", materno: "--", nombre: "William" }},
      { _id: "9999999999999",titulo:"xxsxxxsxxxsxx",autor: {paterno: "Rulfo", materno: "--", nombre: "Juan" }},
    ];
  
    Libro.collection.insert(libros,function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
        console.log(data);
      }
    });
  }
  
  function buscarByid(id){
  
      Libro.find({_id:id},function(err,documentos){
        console.log(documentos);
      });
  }
  
  function modificarTituloByid(id, nuevoTitulo){
  
  Libro.findOneAndUpdate({_id:id},
      {'titulo':nuevoTitulo},function(err,data){
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }
  
  function main() {
    //nuevoLibro();
    //nuevosLibros();
   buscarByid(1111111111111);
    modificarTituloByid(9999999999999, "El Cid Campeador");
  }
main()