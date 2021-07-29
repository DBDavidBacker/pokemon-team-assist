let con = require('./index.js');

con.connect((err) => {
  if (err) {
    throw err;
  }

  let sql = 'CREATE TABLE moves (name VARCHAR(40), id INT(3) UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT, formatName VARCHAR (40), type VARCHAR(9), kind VARCHAR(9), PP INT(2), power INT(3), accuracy INT(3) )';

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('moves created');
  });
})