//Definição da porta e caminho
const host = process.env.HOST ;
const port = process.env.PORT || 3000 ;

//iniciar App
const express = require ('express');
const app = express();


//Criação de rotas estáticas
app.use('../assets', express.static ('assets'));
app.use('../views', express.static ('views'));

//Controlo de acesso
const cors = require('cors');
app.use(cors());
app.use(cors({
    exposedHeaders: ['location'],
    }));
    
//Colocar app à escuta
app.listen(port, function(err) {
    if(!err) {
        console.log ('Aplication listening on ' + host + ' and port ' + port);
    }
    else {
        console.log(err);
    }
});

module.exports = app;
require('./loader.js');
