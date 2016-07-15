var assignSantas  = require('../js/app').assignSantas;
var assert  = require('chai').assert;

describe('assignSantas', function() {
  it('should return null for empty array', function () {
    var actual = assignSantas([]);

    assert.strictEqual(null, actual);
  });
});
