let con = require('./index.js');

con.connect((err) => {
  if (err) {
    throw err;
  }

  let sql = 'CREATE TABLE teammates (id INT(5) UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT, mainPokemon INT(3), partnerPokemon INT(3), frequency FLOAT(10), FOREIGN KEY (mainPokemon) REFERENCES pokemon (id), FOREIGN KEY (partnerPokemon) REFERENCES pokemon (id))';

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('teammates created');
  });
})