var express = require('express');
var router = express.Router();
var nombres = ['fernando' , 'adrian', 'juande' , 'angel' , 'david' , 'eduardo' , 'luis' , 'diego' , 'rebeca' , 'aldo'];




/* Pagina principal Home*/
router.get('/', function(req,res,next){
  res.render('index', {page: 'Home' , menuId:'home' , title: 'Nombres'});
});

/* Ruta nueva al Ubicación*/

router.get('/ubicacion', function(req,res,next){
  res.render('pages/ubicacion', {page: 'ubicacion' , menuId:'ubicacion' , title: 'Nombres'});
});

//Metodo POST
router.post('/', function(req, res){
  res.send('Tengo una peticion con POST');
});

//Metodo PUT
router.put('/greeting', function(req, res){
  res.send('Te doy un saludo con Greeting');
});

//Metodo DELETE
router.delete('/hello', function(req, res){
  res.send('Te doy un saludo con DELETE');
});
module.exports = router;
