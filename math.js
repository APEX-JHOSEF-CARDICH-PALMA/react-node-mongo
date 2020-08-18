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

//Asi de esta manera podemos poner visibles nuestras funciones para que otra clase pueda acceder a ellas 

exports.add = add;
exports.divide = divide;
exports.substract = substract;
exports.multiply = multiply;
