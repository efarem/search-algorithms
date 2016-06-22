var assert = require('chai').assert;
var search = require('../../src/algorithms/binary.js');

describe('search', function () {
  it('should find an item by key using an array of sorted objects', function () {
    var items = [
      {id: 1, name: 'Ron Weasley'},
      {id: 2, name: 'Harry Potter'},
      {id: 4, name: 'Hermione Granger'},
      {id: 6, name: 'Draco Malfoy'},
      {id: 8, name: 'Tom Riddle'},
      {id: 21, name: 'Albus Dumbledore'},
    ];

    function compare(value, subject) {
      if (value > subject.id) {
        return 1;
      } else if (value < subject.id) {
        return -1;
      }

      return 0;
    }

    var albus = search(21, items, compare);
    var harry = search(2, items, compare);
    var draco = search(6, items, compare);

    assert.equal('Albus Dumbledore', albus.name);
    assert.equal('Harry Potter', harry.name);
    assert.equal('Draco Malfoy', draco.name);
  });

  it('should find an item from a sorted array', function () {
    var items = [1,2,3,4,5,6,7,8,9];
    assert.equal(7, search(7, items, function (value, subject) {
      if (value > subject) {
        return 1;
      } else if (value < subject) {
        return -1;
      }

      return 0;
    }));
  });
});
