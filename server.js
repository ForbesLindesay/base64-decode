module.exports = encode;
function encode(input) {
  return new Buffer(input, 'base64').toString()
}