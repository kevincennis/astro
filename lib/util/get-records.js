const consts       = require('../consts');
const validators   = require('../util/validators');
const replacements = require('../translations/replacements');
const translations = require('../translations/fields');
const zodiac       = require('../translations/zodiac');
const add_dates    = require('../util/add-dates');

module.exports = values => {
  const records = [];

  let record;

  outer: while ( values.length ) {
    record = record || {};

    let failures = 0;

    for ( const field of consts.COL ) {
      if ( values.length ) {
        let value = values.shift();

        const raw = value;

        if ( replacements.hasOwnProperty( value ) ) {
          value = replacements[ value ];
        }

        if ( validators[ field ] && !validators[ field ]( value ) ) {
          record[ field ] = ' ';

          if ( ++failures < consts.COL.length ) {
            values.unshift( value );
            continue;
          }

          continue outer;
        }

        if ( translations[ field ] ) {
          value = translations[ field ]( value );
        } else if ( field === 'Pos1' || field === 'Pos2' ) {
          const matches = value.match( /[0-9]{1,3}°([A-Z][a-z])[0-9]{1,3}'/ );
          const sign    = matches ? matches[ 1 ] : null;

          value = zodiac[ sign ] || value;
        }

        record[ field ] = value;
        record[ `${ field }__raw` ] = raw;

        failures = 0;
      }
    }

    records.push( record );
    record = null;
  }

  records.forEach( add_dates );

  records.sort( ( a, b ) => {
    return a.Date < b.Date ? -1 : a.Date > b.Date ? 1 : 0;
  });

  // filter out garbage records
  return records.filter( r => r.Date instanceof Date );
};
