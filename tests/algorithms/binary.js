import { assert } from 'chai';
import { search, compareInts, compareObjectId } from '../../src/algorithms/binary.js';

describe('search', () => {
  it('should find an item by key using an array of sorted objects', () => {
    const items = [
      { id: 1, name: 'Ron Weasley' },
      { id: 2, name: 'Harry Potter' },
      { id: 4, name: 'Hermione Granger' },
      { id: 6, name: 'Draco Malfoy' },
      { id: 8, name: 'Tom Riddle' },
      { id: 21, name: 'Albus Dumbledore' },
    ];

    const albus = search(21, items, compareObjectId);
    const harry = search(2, items, compareObjectId);
    const draco = search(6, items, compareObjectId);

    assert.equal('Albus Dumbledore', albus.name);
    assert.equal('Harry Potter', harry.name);
    assert.equal('Draco Malfoy', draco.name);
  });

  it('should find an item from a sorted array', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.equal(7, search(7, items, compareInts));
  });

  it('should return null if value is not found and value is higher than all in array', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.isNull(search(121, items, compareInts));
  });

  it('should return null if value is not found and value is lower than all in array', () => {
    const items = [2, 3, 4, 5, 6, 7, 8, 9];
    assert.isNull(search(1, items, compareInts));
  });

  it('should return null if the compare function returns something other than -1 0 or 1', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.isNull(search(1, items, () => 'z'));
  });

  it('should search an array of integers by default', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.equal(3, search(3, items));
  });
});
