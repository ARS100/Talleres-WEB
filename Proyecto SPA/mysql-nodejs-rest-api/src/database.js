const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1501',
    database: 'proyectospa',
    port: '3307',
    multipleStatements: true
});

mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
        return
    }else{
        console.log('La base de datos está conectada');
    }
});

module.exports = mysqlConnection;