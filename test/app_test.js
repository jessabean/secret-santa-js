var sample  = require('../js/sample');
var assert  = require('chai').assert;

describe('sample tests', function() {
  it('returns foo', function() {
    var result = sample.sampleText('foo');

    assert.strictEqual(result, 'foo');
  });
});
