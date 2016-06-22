var assert = require('chai').assert;
var search = require('../../src/algorithms/binary.js');

function compareInts(value, subject) {
  if (value > subject) {
    return 1;
  } else if (value < subject) {
    return -1;
  }
  return 0;
}

function compareObjectId(value, subject) {
  if (value > subject.id) {
    return 1;
  } else if (value < subject.id) {
    return -1;
  }

  return 0;
}

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

    var albus = search(21, items, compareObjectId);
    var harry = search(2, items, compareObjectId);
    var draco = search(6, items, compareObjectId);

    assert.equal('Albus Dumbledore', albus.name);
    assert.equal('Harry Potter', harry.name);
    assert.equal('Draco Malfoy', draco.name);
  });

  it('should find an item from a sorted array', function () {
    var items = [1,2,3,4,5,6,7,8,9];
    assert.equal(7, search(7, items, compareInts));
  });

  it('should return null if value is not found and value is higher than all in array', function () {
    var items = [1,2,3,4,5,6,7,8,9];
    assert.isNull(search(121, items, compareInts));
  });

  it('should return null if value is not found and value is lower than all in array', function () {
    var items = [2,3,4,5,6,7,8,9];
    assert.isNull(search(1, items, compareInts));
  });

  it('should return null if the compare function returns something other than -1 0 or 1', function () {
    var items = [1,2,3,4,5,6,7,8,9];
    assert.isNull(search(1, items, function () { return 'z'; }));
  });
});
