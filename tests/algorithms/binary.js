var assert = require('chai').assert;
var search = require('../../src/algorithms/binary.js');

describe('search', function () {
  it('should find an item from sorted array', function () {
    var items = [
      {id: 1, name: 'Ron Weasley'},
      {id: 2, name: 'Harry Potter'},
      {id: 4, name: 'Hermione Granger'},
      {id: 6, name: 'Draco Malfoy'},
      {id: 8, name: 'Tom Riddle'},
      {id: 21, name: 'Albus Dumbledore'},
    ];

    var albus = search(21, items, 'id');
    var harry = search(2, items, 'id');
    var draco = search(6, items, 'id');

    assert.equal('Albus Dumbledore', albus.name);
    assert.equal('Harry Potter', harry.name);
    assert.equal('Draco Malfoy', draco.name);
  });
});
