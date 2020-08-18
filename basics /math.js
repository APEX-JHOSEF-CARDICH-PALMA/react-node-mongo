function add (x1,x2){
    return x1+x2;
}
function substract (x1,x2){
    return x1-x2;
}
function multiply (x1,x2){
    return x1*x2;
}
function divide (x1,x2){
    if(x2 == 0){
        console.log('El denominador no puede ser 0');
    }else{
        return x1/x2;
    }
}
//Formas de exportar nuestras funciones en JS: 

/*F1: Asi de esta manera podemos poner visibles nuestras funciones para que otra clase pueda acceder a ellas 

exports.add = add;
exports.divide = divide;
exports.substract = substract;
exports.multiply = multiply;
*/

/*F2: Se puede crear un objeto, la cual puede contener funciones y otras cosas, de hecho crearemos un
objeto llamado math, en la cual podremos añadir atributos, estos atributos pueden ser las fucniones que 
hemos definido anteriormente. Objeto Math con multiples propiedades.
*/
const Math = {};
Math.add = add;
Math.substract = substract;
Math.multiply = multiply; 
Math.divide = divide; 

module.exports = Math;   // Esta manera de exportar es mas conocida, ademas permite exportar
// funciones, objetos, variables, etc.. 

