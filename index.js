const fs        = require('fs');
const promisify = require('util').promisify;
const pipeline  = require('./lib/pipeline');
const compose   = require('./lib/util/compose');

const INPUT  = 'transit.pdf' ;
const OUTPUT = 'output.txt';

const translate = compose(
  promisify( fs.writeFile ).bind( fs, OUTPUT ),
  pipeline,
  promisify( fs.readFile ).bind( fs, INPUT )
);

translate().then( console.log ).catch( console.error );
