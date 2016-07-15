var assignSantas  = require('../js/app').assignSantas;
var assert  = require('chai').assert;

describe('assignSantas', function() {
  it('should return null for empty array', function () {
    var actual = assignSantas([]);

    assert.strictEqual(null, actual);
  });

  it('should return null for null', function () {
    var actual = assignSantas(null);

    assert.strictEqual(null, actual);
  });

  it('returns a list that equals the length of the original list', function () {
    var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);
    var expected = 3;

    assert.lengthOf(actual, expected);
  });

  it('returns a list of pairs containing a santa and a recipient', function() {
    assert.fail(true, false);
  });

  it('returns a list of pairs where santa and recipient are never the same', function() {
    assert.fail(true, false);
  });

  it('returns a list with no duplicate recipients', function() {
    assert.fail(true, false);
  });
});
