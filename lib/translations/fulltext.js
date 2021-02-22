const { DELIM } = require('../consts');

// replace symbols in fulltext w/ their Illustrator equivalents
module.exports = {
  // planets
  ' ̧': '0',
  '¶': '2',
  'º': 'B',
  '»': 'C',
  '¼': 'F',
  '½': 'K',
  '¾': 'L',
  // aspects
  'ß':  'R',
  ' ̈':  'R',
  '’':  'T',
  'á':  'V',
  '‘':  'U',
  'à':  'X',
  '©':  'X',
  'Ë':  'Asc.'
};
