let pokeData = require('../gen8uu-1760.json');

let pokeList = Object.keys(pokeData.data);

let con = require('./index.js');

//strategy: get the key for the pokemon, then do a for loop for the key of each teammate and add them to the database

con.connect((err) => {
  if (err) {
    throw err;
  }

  let insertTeamPair = (name) => {

    let getMainKeySql = `SELECT id FROM pokemon WHERE name = "${name}";`

    con.query(getMainKeySql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result, 'result')
      let mates = Object.entries(pokeData.data[name]['Teammates']);

      for (let element of mates) {
         // console.log(element, 'element')
        if (element[1] !== 0) {
          con.query(`SELECT id FROM pokemon WHERE name = "${element[0]}"`, (err, result2) => {
            if (err) {
              throw err;
            }


            if (result2[0] !== undefined) {
              con.query(`INSERT INTO teammates (mainPokemon, partnerPokemon, frequency) VALUES (${result[0].id}, ${result2[0].id}, ${element[1]})`, (err, result3) => {
                if (err) {
                  throw err;
                }
              })
            }
          })
        }
      }


    })

  }

  for (let i = 0; i < pokeList.length; i++) {
    insertTeamPair(pokeList[i]);
  }

})