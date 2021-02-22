// translate field values to their correct types
module.exports = {
  H1: Number,
  H2: Number,
  Date: s => new Date( s ),
  Age: Number
};
