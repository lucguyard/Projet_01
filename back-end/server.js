const http = require('http');

const app = require('./app.js');

const server = http.createServer(app);


/*
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sitepoint'

});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

*/

server.listen(4000);



