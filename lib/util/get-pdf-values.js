const pdf          = require('pdf-parse');
const consts       = require('../consts');
const replacements = require('../translations/fulltext');

const options = {
  async pagerender( page ) {
    const text = await page.getTextContent({
      normalizeWhitespace: false,
      disableCombineTextItems: true
    });

    return text.items.reduce( ( acc, item ) => {
      return acc + item.str + consts.DELIM;
    }, ' ' );
  }
}

// get an array of values out of a PDF
module.exports = async buffer => {
  const data = await pdf( buffer, options );
  const rows = data.text.split( consts.CHART_START );

  let body = rows.slice( 1 ).join('');

  if ( /^debug$/i.test( process.env.NODE_DEBUG ) ) {
    console.log( body );
  }

  for ( const [ text, replacement ] of Object.entries( replacements ) ) {
    body = body.replace( new RegExp( text, 'g'), replacement );
  }

  return body.split( consts.DELIM ).filter( Boolean );
};
