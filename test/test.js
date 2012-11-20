var client = require('../build/build.js');
var server = require('../');
var assert = require('better-assert');

it('encodes to the same data on client and server', function () {
  assert(client('SGVsbG8gV29ybGQ=') === server('SGVsbG8gV29ybGQ=') &&
    server('SGVsbG8gV29ybGQ=') === 'Hello World');
});