// add month and day to a record
module.exports = record => Object.assign( record, {
  Month: record.Date.toString().split( /\s+/ )[ 1 ],
  Day:   +record.Date.toString().split( /\s+/ )[ 2 ]
});
