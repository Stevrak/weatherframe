const fs = require('fs');
const hbs = require('hbs');

//function precompiles a handlebars partial on server start

const readFile = async(filename) =>{
  const rf = require('util').promisify(fs.readFile);
  return await rf(filename, 'utf8');
}

hbscompiler = async(filename) => {
  return await readFile(filename).then((result)=>{

      return hbs.compile(result);
  })
}

module.exports = hbscompiler;
