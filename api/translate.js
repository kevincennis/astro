const pipeline   = require('../lib/pipeline');
const multiparty = require('multiparty');

module.exports = async( req, res ) => {
  const form = new multiparty.Form;

  form.parse( req, async( err, fields, files ) => {
    function bail( ex ) {
      res.writeHead( 500, { 'content-type': 'text/plain' } );
      res.end( String( err ) );
    }

    if ( err ) {
      return bail( err );
    }

    try {
      const file = files.file;
      const text = await pipeline( file );
      res.json({ text });
    } catch ( ex ) {
      bail( ex );
    }
  });
};
