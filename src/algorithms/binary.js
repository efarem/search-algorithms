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

function search(needle, haystack, compare = compareInts) {
  const midpoint = Math.floor(haystack.length / 2);
  const result = compare(needle, haystack[midpoint]);

  if (result === 0) {
    return haystack[midpoint];
  } else if (result === -1) {
    const newHaystack = haystack.splice(0, midpoint);
    return (haystack.length === 1) ? null : search(needle, newHaystack, compare);
  } else if (result === 1) {
    const newHaystack = haystack.splice(midpoint + 1, haystack.length);
    return (haystack.length === 1) ? null : search(needle, newHaystack, compare);
  }

  return null;
}

module.exports = {
  search,
  compareInts,
  compareObjectId,
};
