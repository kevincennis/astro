const consts = require('../consts');

module.exports = records => {
  return records.map( record => {
    return consts.FORMAT.replace( /\S+/g, match => {
      if ( match === 'Day' && String( record[ match ] ).length === 1 ) {
        return ' ' + record[ match ];
      }
      return record[ match ] || ' ';
    });
  }).join('\n');
};
