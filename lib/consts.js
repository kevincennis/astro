const fieldmap = 'H1|P1|Asp|P2|H2|Evt|Method|Date|Time|Age|Pos1|RD|Pos2|RD';
const DELIM    = ':::';
const COL      = fieldmap.split('|');

module.exports.DELIM       = DELIM;
module.exports.COL         = COL;
module.exports.CHART_START = COL.join( DELIM ) + DELIM;
module.exports.FORMAT      = 'Month   Day     P1   Pos1    Asp   P2   Pos2';
