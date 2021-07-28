let pokeData = require('../gen8uu-1760.json');

let pokeList = Object.keys(pokeData.data);

let data = pokeData.data[pokeList[0]];

console.log(data['Abilities']);
console.log(data['usage']);
console.log(data['Viability Ceiling']);
let con = require('./index.js');

con.connect((err) => {
  if (err) {
    throw err;
  }

  let sql = 'CREATE TABLE pokemon (name VARCHAR(40), id INT(3) UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT, pokemonUsage FLOAT(10), vbltyCeiling INT(3), abl1 INT(3) , abl1Usage FLOAT(10), abl2 INT(3) , abl2Usage FLOAT(10), abl3 INT(3) , abl3Usage FLOAT(10), FOREIGN KEY (abl1) REFERENCES abilities (id), FOREIGN KEY (abl2) REFERENCES abilities (id), FOREIGN KEY (abl3) REFERENCES abilities (id) ) ';


  let insertPokemon = (name) => {
      let data = pokeData.data[name];
      let abilityNames = Object.keys(data['Abilities']);
      let abilityValues = Object.values(data['Abilities']);
      let usage = data['usage'];
      let vbltyCeiling = data['Viability Ceiling'][1];

      let getFKeySql = `SELECT id FROM abilities WHERE formatName IN ('${abilityNames[0]}', '${abilityNames[1]}', '${abilityNames[2]}');`

    //  let insertSql = `INSERT INTO pokemon (name, pokemonUsage, vbltyCeiling, abl1, abl1Usage, abl2, abl2Usage, abl3, abl3Usage) VALUES (${name}, ${usage}, ${result[0]}, ${abilityValues[0]}, ${result[1]}, ${abilityValues[1]}, ${result[2]}, ${abilityValues[2]})`;

     con.query(getFKeySql, (err, result) => {
       if (err) {
         throw err;
       }

       if (result[1] === undefined) {
         result[1] = {id: null};
         abilityValues[1] = null;
       }

       if (result[2] === undefined) {
        result[2] = {id: null};
        abilityValues[2] = null;
      }

       let insertSql = `INSERT INTO pokemon (name, pokemonUsage, vbltyCeiling, abl1, abl1Usage, abl2, abl2Usage, abl3, abl3Usage) VALUES ("${name}", ${usage}, ${vbltyCeiling},${result[0].id}, ${abilityValues[0]}, ${result[1].id}, ${abilityValues[1]}, ${result[2].id}, ${abilityValues[2]})`;

       con.query(insertSql, (err, result) => {
         if (err) {
           throw err;
         }
       })


     })



  };

  for (let i = 0; i < pokeList.length; i++) {
    insertPokemon(pokeList[i]);
  }



})