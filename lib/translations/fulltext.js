const { DELIM } = require('../consts');

// replace symbols in fulltext w/ their Illustrator equivalents
module.exports = {
  // planets
  [ ` ̧${ DELIM } ̧` ]: '0',
  [ `¶${ DELIM }¶` ]: '2',
  [ `º${ DELIM }º` ]: 'B',
  [ `»${ DELIM }»` ]: 'C',
  [ `¼${ DELIM }¼` ]: 'F',
  [ `½${ DELIM }½` ]: 'K',
  [ `¾${ DELIM }¾` ]: 'L',
  // aspects
  [ `ß${ DELIM }ß` ]:  'R',
  [ ` ̈${ DELIM } ̈` ]:  'R',
  [ `’${ DELIM }’` ]:  'T',
  [ `á${ DELIM }á`]:   'V',
  [ `‘${ DELIM }‘`]:   'U',
  [ `à${ DELIM }à`]:   'X',
  [ `©${ DELIM }©`]:   'X',
  [ `Ë${ DELIM }Ë`]:   'Asc.',
  [ `SD${ DELIM }SD`]: 'SD',
  [ `SR${ DELIM }SR`]: 'SR',
  // i don't even fucking know why these happen?
  ...Array.from({ length: 99 }).reduce( ( a, c, i ) => {
    const n = i + 1;

    return Object.assign( a, {
      [ `${ n }${ DELIM }${ n }${ DELIM }${ n }`]: `${ n }${ DELIM }${ n }`
    });
  }, {} )
};
