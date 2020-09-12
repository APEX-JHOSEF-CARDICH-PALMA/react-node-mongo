//Instalaremos express que es un framework que tiene utilidades para crear servidores..
const colors = require('colors');
const express = require('express');
const mysql = require('mysql');

//------------------------ DB SETTINGS ------------------------ 
var connection = mysql.createConnection({
    //properties
    host:'127.0.0.1',
    user:'osuser',
    password:'osuser',
    database:'online_shop'

});

connection.connect(function(error){
    if(error){
        console.log('Error connecting to the data base');
    }else{
        console.log('Connected to the data base.. ');
    }

});


//------------------------ EXPRESS SETTINGS ------------------------ 

const server = express(); // express serv object: we can change the name of the express variable called 'server' to 'app' if you want . 

//Default route to excute a query .. we can add more later when needed


server.get('/',function(req,res){
 connection.query("SHOW FULL TABLES FROM online_shop;",function(error,rows,fields){
    if(!!error){
        console.log('error while querying the database ..');
    }else{
        console.log('SUCCES.. ');
        console.log(rows);
    }
 });
    });

server.get('/hi',function(req,res){
    res.send('<h1>Hola mundo con Express y Node.js</h1>');
    res.end();
    });

//configuración del servidor
server.listen(3000,function(){
    console.log('Express server running on 3000 port ..'.red);
})



