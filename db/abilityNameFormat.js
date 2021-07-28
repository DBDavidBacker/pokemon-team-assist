let con = require('./index.js');

let insertFormatName = (index, name) => {
  let formatSql = `UPDATE abilities SET formatName = '${name}' WHERE id = ${index}`;

  con.query(formatSql,(err, result) => {
    if (err) {
      throw err;
    }

  })
}

con.connect((err) => {
  if (err) {
    throw err;
  }

  let sql = 'SELECT * FROM abilities;';

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    for (let i = 0; i < result.length; i++) {
      let formatName = result[i].name.toLowerCase().split(" ").join("").split("'").join("");
      insertFormatName(i + 1, formatName);
    }
  });
})