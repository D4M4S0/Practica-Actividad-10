const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sistema_DB'
});

// Probar conexión
connection.connect((err) => {
    if (err) {
        console.error(' Error de conexión:', err.message);
    } else {
        console.log(' Conectado a MySQL - Sistema_DB');
    }
});

module.exports = connection;
