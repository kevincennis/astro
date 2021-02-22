module.exports = ( ...fns ) =>
  x => fns.reduceRight( ( y, f ) =>
    y.then( f ), Promise.resolve( x ) );
