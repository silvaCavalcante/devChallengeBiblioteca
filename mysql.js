const mysql = require('mysql');


const pool = mysql.createPool({
    "connectionLimit" : 1000,
    "user" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD ,
    "database" : process.env.MYSQL_DATABASE,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT
});

exports.execute = (query, params = []) => {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, resultado, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(resultado);
        }
      });
    });
}

exports.pool = pool;