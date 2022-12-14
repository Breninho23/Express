//Aqui fica as interações com o banco
const database = require('../infra/database');

exports.getPhysiotherapy = function (){
    return database.query(' select * from post.post p where p.codtype = 2');
}

exports.insertPhysiotherapy = function (data2){    
    return database.none('INSERT INTO post.post (codtype ,receptionattendance, receptiontime, receptionnote, collectattendante, collecttime, collectnote, physiotherapyattendance, physiotherapytime, physiotherapynote, contact, suggestion, message) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
        , [2, data2.receptionattendance ,data2.receptiontime, data2.receptionnote, data2.collectattendante, data2.collecttime, data2.collectnote, data2.physiotherapyattendance, data2.physiotherapytime, data2.physiotherapynote, data2.contact, data2.suggestion, data2.message])
    .then(() => {
        return data2;        
    })
    .catch(error => {
        return error;             
    });  
}