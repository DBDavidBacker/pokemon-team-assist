let mysql = require('mysql');
let PASSWORD = require('../config.js');

let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: PASSWORD,
  database: 'pokeTeamAssist'
})

module.exports = con;