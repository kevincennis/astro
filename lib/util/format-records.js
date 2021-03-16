const consts = require('../consts');

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
      record.Asp = record.Asp.replace( /^SD$/, 'D' ).replace( /^SR$/, 'R' );
    }

    if ( record.Evt === '(LEcl)' ) {
      record.Asp = '.';
    }

    if ( record.Evt === '(SEcl)' ) {
      record.Asp = ':';
    }
  }

  const lines = records.map( record => {
    return consts.FORMAT.replace( /\S+/g, match => {
      if ( match === 'Day' && String( record[ match ] ).length === 1 ) {
        return ' ' + record[ match ];
      }
      return record[ match ] || ' ';
    });
  });

  return [ ...new Set( lines ) ].join('\n');
};
