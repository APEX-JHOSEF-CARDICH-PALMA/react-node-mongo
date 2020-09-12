//creacion de un servidor..
const http = require('http');

//Despues de haber usado npm install colors 
const colors = require('colors');

/*En este caso el callaback de la funcion create server nos permite enviar y recibir informacion del servidor
http.createServer(function(req,res){
  //tipo de respuesta que le estamos dando al servidor, ademas podemos agragar un objeto JSON 
  // en el que podemos darle mas informacion al navegador en la respuesta, acuerdate que
  // el tipo de respuesta que se dan vienen determinados por decision del programador, siguiendo las convenciones
  // de de respuesta HTTP.
  res.writeHead(200,{'content-type':'txt/html'});
  res.write('<h1> Hola mundo.. (respuesta del servidor nueva..) </h1>');
  res.end();
}).listen(3000); // En este caso le decimos que escuche por el puerto 3000, en localHost por defecto..
*/

//------------------------------------------------------------------------------------
//Tambien podemos escribir el codigo mas ordenadamente.. 

const handleServer = function(req,res){
  res.writeHead(200,{'content-type':'txt/html'});
  res.write('<h1> Hola mundo.. (respuesta del servidor nueva..) </h1>');
  res.end();
}

//Pasamos la funcion anterior en los paramtros a la hora de crear el server..
const server = http.createServer(handleServer);

//Despues podemos usarlo para activarlo y decir por cual puerto esta escuchando.. 

server.listen(3000,function(){
  console.log('El servidor esta corriendo en el puerto 3000.. '.bgYellow.black)
});

/*Ademas de eso, en el archivo package.json. se pueden configurar todos las ejecuciones que se
quieran ejecutar cuando se ejecute el comando npm start (Esto tambien instalara todas las depe
pendecias)*/