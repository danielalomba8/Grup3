const connect = require('../config/connect.js');

function getUser(req, res){
    //cria e executa a query de leitura na BD 
    connect.con.query('SELECT id_user, email, password, login_type from User', function(err,rows,fields){
        if(!err){
            //verfica os resultados se o numero de linhas for 0 devolve dados nao encontrados, caso contrario envia os resultados
            if(rows.length == 0){
                res.status(404).send("data not found");
            } else {
                res.status(200).send(rows);
            }
        } else 
        console.log('error while performing query.', err);
    });
}

module.exports={
    getUser:getUser
};