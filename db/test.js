let con = require('./index.js');

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected');
})