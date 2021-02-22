const consts = require('../consts');

module.exports = records => {
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
