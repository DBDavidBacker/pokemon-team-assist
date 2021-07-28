let pokeData = require('../gen8uu-1760.json');

let pokeList = Object.keys(pokeData.data);



con.connect((err) => {
  if (err) {
    throw err;
  }

  let sql = 'CREATE TABLE pokemon (name VARCHAR(40), id INT(3) UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT, pokemonUsage FLOAT(10), vbltyCeiling INT(3), abl1 INT(3) , abl1Usage FLOAT(10), abl2 INT(3) , abl2Usage FLOAT(10), abl3 INT(3) , abl3Usage FLOAT(10), FOREIGN KEY (abl1) REFERENCES abilities (id), FOREIGN KEY (abl2) REFERENCES abilities (id), FOREIGN KEY (abl3) REFERENCES abilities (id) ) ';




  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

  });
})