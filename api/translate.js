const pipeline = require('../lib/pipeline');

module.exports = async( req, res ) => {
  const buffer = req.body.file;
  const text   = await pipeline( buffer );

  res.json({ text });
};
