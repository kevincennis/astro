const get_pdf_values = require('./util/get-pdf-values');
const get_records    = require('./util/get-records');
const format_records = require('./util/format-records');
const compose        = require('./util/compose');

module.exports = compose( format_records, get_records, get_pdf_values );
