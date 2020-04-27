const fs = require('fs');
const thunkify = require('thunkify');

const readFile = thunkify(fs.readFile);
const writeFile = thunkify(fs.writeFile);

let thunk = readFile('test.txt', 'utf8');
thunk((err) => {
  if(err) { 
    if(err.code !== 'ENOENT') return console.log(err);
    let thunk = writeFile('output.txt', 'new File');
    thunk((err) => {
      if(err) return console.log(err);
    }
  }
});
