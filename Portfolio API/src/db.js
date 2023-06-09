//sql db connection
const mysql = require('mysql');

const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'swerkdb',
    port:'3306'
})

module.exports = db;