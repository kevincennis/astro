const consts       = require('../consts');
const replacements = require('../translations/replacements');

module.exports = records => {
  for ( const record of records ) {
    if ( /^[0-9]+$/.test( record.P2__raw ) ) {
      delete record.P2;
      delete record.Asp;
      delete record.Pos2;
    } else if ( !record.P2 ) {
      delete record.P2;
      delete record.Pos2;
    }

    if ( record.Asp ) {
      record.Asp = record.Asp.replace( /^SD$/, 'x' ).replace( /^SR$/, 'y' );
    }

    if ( record.Evt === '(LEcl)' ) {
      record.Asp = 'I';
    }

    if ( record.Evt === '(SEcl)' ) {
      record.Asp = 'J';
    }
  }

  const lines = records.map( record => {
    return consts.FORMAT.map( field => {
      if ( field === 'Day' || field === 'Month' ) {
        return replacements[ record[ field ] ] || record[ field ];
      }
      return record[ field ] || ' ';
    }).join('');
  });

  return [ ...new Set( lines ) ].join('\n');
};
