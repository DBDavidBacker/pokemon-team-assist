let con = require('./index.js');

con.connect((err) => {
  if (err) {
    throw err;
  }

  let sql = 'CREATE TABLE abilities (name VARCHAR(40), id INT(3) UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT, formatName VARCHAR (40))';

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('abilities created');
  });
})