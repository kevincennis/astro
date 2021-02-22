const replacements = require('../translations/fulltext');

// field-level validators
module.exports = {
  H1:     n => /^[0-9]{1,2}$/.test( n ) && Number( n ) === Number( n ),
  P1:     s => Object.values( replacements ).includes( s ),
  Asp:    s => Object.values( replacements ).includes( s ),
  P2:     s => Object.values( replacements ).includes( s ),
  H2:     n => /^[0-9]{1,2}$/.test( n ) && Number( n ) === Number( n ),
  Evt:    s => /^\((X|LEcl|SEcl)\)$/.test( s ),
  Method: s => s === 'Tr-Ra',
  Date:   s => /^[A-Z][a-z]{2}\s[0-9]{1,2}\s[0-9]{4}$/.test( s ),
  Time:   s => /^[0-9]{1,2}:[0-9]{2}\s(AM|PM)$/.test( s ),
  Age:    n => /^\d+\.?\d*$/.test( n ) && Number( n ) === Number( n ),
  Pos1:   s => /^[0-9]{1,2}°[A-Z][a-z][0-9]{1,2}'/.test( s ),
  RD:     s => [ 'R', 'D' ].includes( s ),
  Pos2:   s => /^[0-9]{1,2}°[A-Z][a-z][0-9]{1,2}'/.test( s )
};
