//Así importamos todas las funcionalidades de una clase
const math = require('./math.js');
const os = require('os');
const fs = require('fs');

//------------------------------------------------------------------------------------
//Importando funciones de otro archivo 
console.log(math.add(1,2));
console.log(math.substract(1,2));
console.log(math.multiply(1,2));
console.log(math.divide(1,2));
console.log(math.divide(1,0));
//Cuando una funcion retorna 'undefined' es porque no retorna nada..  


/* Despues que el archvo math.js se haya definido el objeto "Math" y se haya exportado, 
podemos ver que propiedades tiene.
*/

console.log(math);

/* Lo que nos sale es el siguiente por consola..

{
  add: [Function: add],
  substract: [Function: substract],
  multiply: [Function: multiply],
  divide: [Function: divide]
}
 */

//------------------------------------------------------------------------------------
// Inportando funciones de Node.js
console.log('Memoria libre: ', os.freemem(), 'bytes');
console.log('Tipo de sistema operativo: ', os.platform());
//------------------------------------------------------------------------------------
//Trabajando con archivos en Node.js 
/* un callback es una funcion que se ejecuta cuando ha terminado un proceso.. en este caso
podemos ver que al terminar de crear un archivo podemos llamar a una funcion, en este caso para 
ver si se ha producido un error .. 

El codigo de abajo es asincrono, es decir, la tarea de craear un archivo es asignada al sistema operativo
por lo tanto node se encarga de seguir ejecutando la siguiente linea.. y por ello se ejecuta antes en comnsole lo
 Final, antes que el console log del archivo.. */

fs.writeFile('./archivo.txt','linea escrita', function(err){
  if(err){
    console.log(err)
  }
  console.log('CALLBACK: Se ha creado un archivo.. ');
})

console.log('Final: Se esta creando el archivo, pero yo estoy en la siguiente linea de cod, ya que la escritura del arivo depende del sistema operativo..');

/*El tipo de programacion asincrona despierta la curiosidad ya que estmos acostumbrados 
a poder ejecutar linea por line el codigo, esperando a que cada funcion termine de hacer su tarea
par apoder hacer la siguiente, sin embargo al tener un callback, podemos controlar cuando una 
funcion se ha ejecutado sin problemas y poder seguir con las tareas que le suceden mediante los 
callback. Los callbank son las cosas que debemos hacer cuando se ha terminado de ejecutar  una
funcion en concreto.*/
//------------------------------------------------------------------------------------

fs.readFile('./archivo.txt',function(err,data){
  if (err){
    console.log('Hubo error al leer');
  }
  console.log('Mostrando el contenido del archivo: ', data.toString());
})