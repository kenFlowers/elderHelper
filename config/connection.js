/**
 * Created by kennethFlowers on 11/07/17.
 */


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root' ,
    password: '',
    database: 'elderhelper_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadid);
});

module.exports = connection;