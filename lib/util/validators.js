const replacements = require('../translations/replacements');

const isInt    = s => /^[0-9]+$/.test( s );
const isSymbol = s => Object.values( replacements ).includes( s );

// field-level validators
module.exports = {
  H1:     isInt,
  P1:     isSymbol,
  Asp:    s => isSymbol( s ) || [ 'SD', 'SR' ].includes( s ),
  P2:     s => isSymbol( s ) || isInt( s ),
  H2:     isInt,
  Evt:    s => /^\((X|LEcl|SEcl|->H|SD|SR)\)$/.test( s ),
  Method: s => s === 'Tr-Ra',
  Date:   s => /^[A-Z][a-z]{2}\s[0-9]{1,2}\s[0-9]{4}$/.test( s ),
  Time:   s => /^[0-9]{1,2}:[0-9]{2}\s(AM|PM)$/.test( s ),
  Age:    n => /^\d+\.?\d*$/.test( n ) && Number( n ) === Number( n ),
  Pos1:   s => /^[0-9]{1,2}°[A-Z][a-z][0-9]{1,2}'/.test( s ),
  RD:     s => [ 'R', 'D' ].includes( s ),
  Pos2:   s => /^[0-9]{1,2}°[A-Z][a-z][0-9]{1,2}'/.test( s )
};
