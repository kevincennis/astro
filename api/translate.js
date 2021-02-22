const pipeline   = require('../lib/pipeline');
const multiparty = require('multiparty');

module.exports = async( req, res ) => {
  const form = new multiparty.Form;

  form.on( 'part', part => {
    if ( !part.filename ) {
      part.resume();
      return;
    }

    const chunks = [];

    part.on( 'data', chunk => chunks.push( chunk ) );

    part.on( 'error', ex => {
      res.writeHead( 500, { 'content-type': 'text/plain' } );
      res.end( String( ex ) );
      console.error( ex );
    });

    part.on( 'finish', async() => {
      const file = Buffer.concat( chunks );
      const text = await pipeline( file );
      res.json({ text });
    });
  });

  form.parse( req );
};
