var assignSantas  = require('../js/app').assignSantas;
var parseNames  = require('../js/app').parseNames;
var assert  = require('chai').assert;

describe('secret santa app', function() {
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

    it('returns a list of pairs containing a santa', function() {
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);
      
      for (var i in actual) {
        assert.isTrue(actual[i].hasOwnProperty('santa'), 'hasOwnProperty("santa")');
      }
    });

    it('returns a list of pairs containing a recipient', function() {
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);
      
      for (var i in actual) {
        assert.isTrue(actual[i].hasOwnProperty('recipient'), 'hasOwnProperty("recipient")');
      }
    });

    it('returns a list of pairs where a santa and her recipient are not the same person', function() {
      assert.fail(true, false);
    });

    it('returns a list with no duplicate santas', function() {
       assert.fail(true, false);     
    })

    it('returns a list with no duplicate recipients', function() {
      assert.fail(true, false);
    });
  });

  describe('parseNames', function() {
    it('should return an array', function() {
      var actual = parseNames('Cersei\nJamie\nTyrion');
      var expected = ['Cersei', 'Jamie', 'Tyrion'];

      assert.deepEqual(actual, expected);
    });

    it('should remove empty lines', function(){
      var actual = parseNames('Cersei\n\n\nJamie\nTyrion\n');
      var expected = ['Cersei', 'Jamie', 'Tyrion'];

      assert.deepEqual(actual, expected);
    });

    it('should trim each line', function(){
      var actual = parseNames('Cersei\n\n\nJamie\n\tTyrion\n');
      var expected = ['Cersei', 'Jamie', 'Tyrion'];

      assert.deepEqual(actual, expected);
    });
    
    it('should allow spaces in names', function() {
      var actual = parseNames('Cooper Von Snugglesworth\nStanley Teets');
      var expected = ['Cooper Von Snugglesworth', 'Stanley Teets'];

      assert.deepEqual(actual, expected);
    });

  });
})

